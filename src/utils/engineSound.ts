// Web Audio API Hypercar Engine Sound Synthesizer

class EngineSoundSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private activeOscillators: OscillatorNode[] = [];
  private gainNode: GainNode | null = null;
  private filterNode: BiquadFilterNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playEngineRev(soundType: string, baseFreq: number = 75) {
    try {
      this.initContext();
      if (!this.ctx) return;

      this.stop(); // Stop any current playing rev

      const now = this.ctx.currentTime;
      this.isPlaying = true;

      // Master Gain
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.01, now);
      // Ramp up smoothly
      this.gainNode.gain.linearRampToValueAtTime(0.35, now + 0.1);
      // Hold high rev
      this.gainNode.gain.setValueAtTime(0.35, now + 1.2);
      // Decay down
      this.gainNode.gain.exponentialRampToValueAtTime(0.001, now + 2.8);

      // Low pass filter for deep rumble
      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = 'lowpass';
      this.filterNode.frequency.setValueAtTime(250, now);
      this.filterNode.frequency.exponentialRampToValueAtTime(soundType === 'ELECTRIC' ? 1200 : 2800, now + 1.0);
      this.filterNode.frequency.exponentialRampToValueAtTime(300, now + 2.6);

      // Multi-harmonic engine tone
      const harmonicRatios = soundType === 'ELECTRIC' 
        ? [1, 2, 3.5] 
        : [0.5, 1, 1.5, 2, 2.5, 3, 4];

      harmonicRatios.forEach((ratio) => {
        if (!this.ctx || !this.gainNode) return;
        const osc = this.ctx.createOscillator();
        
        if (soundType === 'ELECTRIC') {
          osc.type = 'sine';
        } else if (soundType === 'W16') {
          osc.type = ratio % 1 === 0 ? 'sawtooth' : 'triangle';
        } else {
          osc.type = 'sawtooth';
        }

        const startPitch = baseFreq * ratio;
        const peakPitch = startPitch * (soundType === 'ELECTRIC' ? 3.2 : 4.5);

        osc.frequency.setValueAtTime(startPitch, now);
        // Throttle rev up
        osc.frequency.exponentialRampToValueAtTime(peakPitch, now + 0.9);
        // Quick exhaust surge
        osc.frequency.exponentialRampToValueAtTime(peakPitch * 1.1, now + 1.1);
        // Coast down
        osc.frequency.exponentialRampToValueAtTime(startPitch * 1.1, now + 2.5);

        const subGain = this.ctx.createGain();
        subGain.gain.value = 1 / (ratio * 1.8);

        osc.connect(subGain);
        subGain.connect(this.filterNode);
        this.activeOscillators.push(osc);
        osc.start(now);
        osc.stop(now + 2.8);
      });

      // Turbo / Intake air whistle if combustion engine
      if (soundType !== 'ELECTRIC') {
        const bufferSize = this.ctx.sampleRate * 2.8;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = this.ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;

        const noiseFilter = this.ctx.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.setValueAtTime(800, now);
        noiseFilter.frequency.exponentialRampToValueAtTime(4500, now + 1.0);
        noiseFilter.frequency.exponentialRampToValueAtTime(1000, now + 2.5);
        noiseFilter.Q.value = 4.0;

        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0.001, now);
        noiseGain.gain.linearRampToValueAtTime(0.12, now + 1.0);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 2.7);

        whiteNoise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(this.gainNode);
        whiteNoise.start(now);
        whiteNoise.stop(now + 2.8);
      }

      this.filterNode.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);

      setTimeout(() => {
        this.isPlaying = false;
      }, 2900);

    } catch (e) {
      console.warn('Audio synthesis initialized on user gesture:', e);
    }
  }

  public stop() {
    this.activeOscillators.forEach(osc => {
      try { osc.stop(); } catch {}
    });
    this.activeOscillators = [];
    this.isPlaying = false;
  }
}

export const engineSound = new EngineSoundSynthesizer();
