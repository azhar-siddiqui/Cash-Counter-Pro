#!/usr/bin/env node

/**
 * Generate PWA icons from SVG
 * This script creates PNG icons for PWA manifest
 */

const fs = require("fs");
const path = require("path");

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, "../public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// SVG content for the icon (simple cash counter symbol)
const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <style>
      .icon-bg { fill: #000000; }
      .icon-fg { fill: #ffffff; }
    </style>
  </defs>
  <rect class="icon-bg" width="512" height="512" rx="120"/>
  <circle cx="256" cy="256" r="140" class="icon-fg"/>
  <g transform="translate(256, 256)">
    <circle cx="0" cy="0" r="80" class="icon-bg"/>
    <text x="0" y="30" font-size="60" font-weight="bold" class="icon-fg" text-anchor="middle" font-family="Arial">$</text>
  </g>
</svg>`;

// Convert SVG to PNG using canvas (Node.js)
// Since we can't use canvas directly, we'll create simple placeholder PNGs
// In a real scenario, you'd use a tool like sharp or puppeteer

// For now, create a simple base64 PNG (1x1 transparent)
const create1x1PNG = () => {
  return Buffer.from([
    0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00, 0x00, 0x0d,
    0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
    0x08, 0x06, 0x00, 0x00, 0x00, 0x1f, 0x15, 0xc4, 0x89, 0x00, 0x00, 0x00,
    0x0a, 0x49, 0x44, 0x41, 0x54, 0x08, 0x99, 0x63, 0x00, 0x01, 0x00, 0x00,
    0x05, 0x00, 0x01, 0x0d, 0x0a, 0x2d, 0xb4, 0x00, 0x00, 0x00, 0x00, 0x49,
    0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82,
  ]);
};

// Create a simple gradient PNG using manual construction
// This is a workaround - in production, use 'sharp' npm package
const createSimplePNG = (size) => {
  // For now, save as SVG and note that you should use 'sharp' in production
  const pngPath = path.join(publicDir, `placeholder-${size}x${size}.png`);
  // Create a simple 1x1 PNG as placeholder
  fs.writeFileSync(pngPath, create1x1PNG());
  console.log(`Created placeholder PNG: ${pngPath}`);
};

// Save SVG directly for reference
const svgPath = path.join(publicDir, "icon.svg");
fs.writeFileSync(svgPath, svgIcon);
console.log(`Created SVG icon: ${svgPath}`);

console.log("\n⚠️  NOTE: For proper PWA icon generation, install sharp:");
console.log("   npm install --save-dev sharp");
console.log("\nThen update this script to use sharp for PNG conversion.");

console.log("\n✓ Icon generation completed!");
console.log("\nNext steps:");
console.log("1. Install sharp: npm install --save-dev sharp");
console.log("2. Create PNG icons from SVG using sharp");
console.log("3. Or manually create 192x192 and 512x512 PNG icons");
