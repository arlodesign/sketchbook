/**
 * For any progress value from 0–1, return a loop from 0-1. 0 returns 0, 1 returns 0
 * Set wave for amount of waviness of return value
 */
export default function waveLoop(progress, wave = 2) {
  return (
    (Math.sin(wave * Math.PI * progress - Math.PI / 2) / 2 + 0.5) *
    Math.sin(Math.PI * progress)
  );
}
