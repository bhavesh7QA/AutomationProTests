const fetch = require('node-fetch');

const pages = [
  'https://automationpro.netlify.app/index.html',
  'https://automationpro.netlify.app/about.html',
  'https://automationpro.netlify.app/contact.html',
  'https://automationpro.netlify.app/login.html',
  'https://automationpro.netlify.app/register.html'
];

(async () => {
  for (const url of pages) {
    try {
      const res = await fetch(url);
      console.log(`${url} → ${res.status}`);
      if (res.status !== 200) console.error(`⚠️ ${url} returned ${res.status}`);
    } catch (err) {
      console.error(`❌ Failed to fetch ${url}: ${err}`);
    }
  }
})();
