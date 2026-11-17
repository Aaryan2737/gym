const fs = require('fs');
const path = require('path');
const https = require('https');

const baseDir = path.join(__dirname, '..', 'public', 'images');

const images = [
  // Hero
  {
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=85&w=1920&auto=format&fit=crop',
    dest: 'hero/hero-main.jpg',
  },
  // About
  {
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=85&w=1000&auto=format&fit=crop',
    dest: 'about/about-philosophy.jpg',
  },
  // Facilities
  {
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=85&w=1000&auto=format&fit=crop',
    dest: 'facilities/strength-zone.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=85&w=1000&auto=format&fit=crop',
    dest: 'facilities/cardio-deck.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=85&w=1000&auto=format&fit=crop',
    dest: 'facilities/functional-rig.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=85&w=1000&auto=format&fit=crop',
    dest: 'facilities/group-studio.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=85&w=1000&auto=format&fit=crop',
    dest: 'facilities/recovery-suite.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=85&w=1000&auto=format&fit=crop',
    dest: 'facilities/changing-rooms.jpg',
  },
  // Training Options
  {
    url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=85&w=1000&auto=format&fit=crop',
    dest: 'training/open-gym.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=85&w=1000&auto=format&fit=crop',
    dest: 'training/personal-training.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=85&w=1000&auto=format&fit=crop',
    dest: 'training/group-clinics.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=85&w=1000&auto=format&fit=crop',
    dest: 'training/nutrition-lifestyle.jpg',
  },
  // Trainers
  {
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=85&w=800&auto=format&fit=crop',
    dest: 'trainers/trainer-arjun.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=85&w=800&auto=format&fit=crop',
    dest: 'trainers/trainer-priya.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=85&w=800&auto=format&fit=crop',
    dest: 'trainers/trainer-vikram.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=85&w=800&auto=format&fit=crop',
    dest: 'trainers/trainer-ananya.jpg',
  },
  // Gallery
  {
    url: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=85&w=800&auto=format&fit=crop',
    dest: 'gallery/gallery-1.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=85&w=800&auto=format&fit=crop',
    dest: 'gallery/gallery-2.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=85&w=800&auto=format&fit=crop',
    dest: 'gallery/gallery-3.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=85&w=800&auto=format&fit=crop',
    dest: 'gallery/gallery-4.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?q=85&w=800&auto=format&fit=crop',
    dest: 'gallery/gallery-5.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=85&w=800&auto=format&fit=crop',
    dest: 'gallery/gallery-6.jpg',
  },
  // Testimonial Avatars
  {
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop',
    dest: 'testimonials/avatar-rohan.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    dest: 'testimonials/avatar-sneha.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    dest: 'testimonials/avatar-aditya.jpg',
  },
  // Location
  {
    url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=85&w=1200&auto=format&fit=crop',
    dest: 'location/facility-exterior.jpg',
  },
];

function download(url, destPath) {
  return new Promise((resolve, reject) => {
    const fullPath = path.join(baseDir, destPath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });

    function get(currentUrl) {
      https.get(currentUrl, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          get(res.headers.location);
          return;
        }

        if (res.statusCode !== 200) {
          reject(new Error(`Failed to download ${currentUrl}: HTTP ${res.statusCode}`));
          return;
        }

        const fileStream = fs.createWriteStream(fullPath);
        res.pipe(fileStream);

        fileStream.on('finish', () => {
          fileStream.close();
          const stats = fs.statSync(fullPath);
          console.log(`✓ Downloaded ${destPath} (${Math.round(stats.size / 1024)} KB)`);
          resolve();
        });

        fileStream.on('error', (err) => {
          fs.unlink(fullPath, () => {});
          reject(err);
        });
      }).on('error', reject);
    }

    get(url);
  });
}

async function run() {
  console.log(`Starting download of ${images.length} high-quality images...`);
  for (const img of images) {
    try {
      await download(img.url, img.dest);
    } catch (err) {
      console.error(`Error downloading ${img.dest}:`, err.message);
    }
  }
  console.log('Finished downloading images.');
}

run();
