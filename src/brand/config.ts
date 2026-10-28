// Nishu Digital Tools - brand settings.
// Keep all branding here so upstream OmniTools updates merge cleanly.
// logo.png = official Nishu Digital logo (from nishu.digital/assets/img/logo.png).
// To use a separate logo for dark mode, add logo-white.png and import it below.
import logo from './logo.png';
const logoWhite = logo;

export const BRAND = {
  name: 'Nishu Digital Tools',
  url: 'https://nishu.digital',
  owner: 'Nishu Digital',
  logo,
  logoWhite,
  upstream: {
    name: 'OmniTools',
    url: 'https://github.com/iib0011/omni-tools'
  }
};
