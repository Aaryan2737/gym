const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public', 'images');

function makeSvg(width, height, title, subtitle, accent = '#D8FF35') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#181818" />
      <stop offset="50%" stop-color="#111111" />
      <stop offset="100%" stop-color="#0a0a0a" />
    </linearGradient>
    <radialGradient id="glow" cx="80%" cy="20%" r="60%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#111111" stop-opacity="0" />
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
    </pattern>
  </defs>
  
  <rect width="100%" height="100%" fill="url(#bg)" />
  <rect width="100%" height="100%" fill="url(#glow)" />
  <rect width="100%" height="100%" fill="url(#grid)" />
  
  <g opacity="0.1" stroke="${accent}" stroke-width="2" fill="none">
    <circle cx="${width * 0.85}" cy="${height * 0.3}" r="120" />
    <circle cx="${width * 0.85}" cy="${height * 0.3}" r="200" stroke-dasharray="8 8" />
    <line x1="0" y1="${height * 0.8}" x2="${width}" y2="${height * 0.8}" stroke="rgba(255,255,255,0.08)" />
  </g>

  <g transform="translate(48, ${height - 90})">
    <rect x="-12" y="-36" width="6" height="44" fill="${accent}" />
    <text x="6" y="-12" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="28" fill="#FFFFFF" letter-spacing="0.05em">
      ${title.toUpperCase()}
    </text>
    <text x="6" y="16" font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="14" fill="#A7A7A7" letter-spacing="0.1em">
      ${subtitle.toUpperCase()}
    </text>
  </g>
</svg>`;
}

const assets = [
  { path: 'hero/hero-bg.svg', w: 1920, h: 1080, title: 'JERAI FITNESS', sub: 'High Performance Training Floor' },
  { path: 'facilities/strength-zone.svg', w: 800, h: 600, title: 'Heavy Iron Zone', sub: 'Olympic Racks • Calibrated Plates' },
  { path: 'facilities/cardio-deck.svg', w: 800, h: 600, title: 'Cardio Deck', sub: 'Curved Treadmills • Concept2 Rowers' },
  { path: 'facilities/functional-training.svg', w: 800, h: 600, title: 'Functional Rig', sub: 'Turf Strip • Kettlebells • Plyo' },
  { path: 'facilities/group-studio.svg', w: 800, h: 600, title: 'Movement Studio', sub: 'HIIT • Yoga • Sound Engineered' },
  { path: 'facilities/recovery-corner.svg', w: 800, h: 600, title: 'Recovery Suite', sub: 'Percussion Therapy • Mobility' },
  { path: 'facilities/changing-rooms.svg', w: 800, h: 600, title: 'Executive Lockers', sub: 'Showers • Secure Access' },
  { path: 'trainers/trainer-arjun.svg', w: 600, h: 750, title: 'Arjun Mehta', sub: 'Head Coach • CSCS Certified' },
  { path: 'trainers/trainer-priya.svg', w: 600, h: 750, title: 'Priya Sharma', sub: 'Mobility & Vinyasa • RYT-500' },
  { path: 'trainers/trainer-vikram.svg', w: 600, h: 750, title: 'Vikram Patil', sub: 'Functional Strength • CF-L2' },
  { path: 'trainers/trainer-ananya.svg', w: 600, h: 750, title: 'Ananya Desai', sub: 'Sports Nutritionist & Coach' },
  { path: 'brand/logo.svg', w: 320, h: 80, title: 'JERAI', sub: 'ATHLETIC CLUB' },
];

assets.forEach(a => {
  const filePath = path.join(publicDir, a.path);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, makeSvg(a.w, a.h, a.title, a.sub));
  console.log('Created asset:', a.path);
});
