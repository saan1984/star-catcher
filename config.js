// Per-build settings. build.sh writes a target-specific copy of this file into each dist/ build.
//   platform: 'web' | 'android' | 'playables'
//
// Monetization providers (AdMob, CrazyGames/Poki SDK, Play Billing, ...) plug in here by
// setting window.GameMonetization. The game shows ad / purchase UI ONLY when a provider exists,
// and never on YouTube Playables. See MONETIZATION.md for the interface.
//   trialMinutes: minutes of free play before the one-time unlock is required (0 = no trial, fully free).
//   unlockUrl: where the "get the full game" button sends web players when the trial ends (store or itch.io page).
//   The trial only activates when a purchase provider exists (Android) or unlockUrl is set (web),
//   and never on YouTube Playables or Poki.
window.GAME_CONFIG = { platform: 'web', trialMinutes: 20, unlockUrl: '' };
