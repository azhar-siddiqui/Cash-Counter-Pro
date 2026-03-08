#!/usr/bin/env node

/**
 * Generate PWA icons
 * Creates 192x192 and 512x512 PNG icons for PWA manifest
 */

const fs = require("fs");
const path = require("path");

// Using sharp if available, otherwise create placeholder
try {
  const sharp = require("sharp");

  const publicDir = path.join(__dirname, "../public");

  // SVG content for the icon
  const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="512" height="512" rx="120" fill="url(#grad1)"/>
    <circle cx="256" cy="256" r="140" fill="#ffffff"/>
    <circle cx="256" cy="256" r="100" fill="url(#grad1)"/>
    <g transform="translate(256, 256)">
      <text x="0" y="35" font-size="80" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="Arial, sans-serif">$</text>
    </g>
  </svg>`;

  const svgBuffer = Buffer.from(svgIcon);

  // Generate 192x192
  sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, "icon-192x192.png"))
    .then((info) => console.log("✓ Created icon-192x192.png"))
    .catch((err) => console.error("Error creating 192x192:", err));

  // Generate 512x512
  sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, "icon-512x512.png"))
    .then((info) => console.log("✓ Created icon-512x512.png"))
    .catch((err) => console.error("Error creating 512x512:", err));

  // Save SVG for reference
  fs.writeFileSync(path.join(publicDir, "icon.svg"), svgIcon);
  console.log("✓ Created icon.svg");
} catch (err) {
  console.error("Sharp not found. Installing...");
  console.log("Run: npm install --save-dev sharp");
}
