/**
 * Fix files that start with --- but have no closing ---
 * Remove the leading --- line from these files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BLOG_DIR = path.resolve(__dirname, '..', 'blog');

const brokenFiles = [
  'oopbuy-consolidation-guide.md',
  'oopbuy-dashboard-guide.md',
  'oopbuy-delivery-guide.md',
  'oopbuy-first-order.md',
  'oopbuy-getting-started.md',
  'oopbuy-how-to-buy.md',
  'oopbuy-how-to-order.md',
  'oopbuy-new-user-guide.md',
  'oopbuy-order-guide.md',
  'oopbuy-ordering-process.md',
  'oopbuy-payment-guide.md',
  'oopbuy-platform-guide.md',
  'oopbuy-purchase-guide.md',
  'oopbuy-registration-guide.md',
  'oopbuy-shipping-methods.md',
  'oopbuy-shipping-options.md',
  'oopbuy-shopping-guide.md',
  'oopbuy-top-up-guide.md',
  'oopbuy-warehouse-guide.md',
];

let fixed = 0;
for (const file of brokenFiles) {
  const filePath = path.join(BLOG_DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Remove leading ---\n
  if (content.startsWith('---\n')) {
    content = content.substring(4); // remove '---\n'
    fs.writeFileSync(filePath, content, 'utf-8');
    fixed++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`\nFixed ${fixed} files`);
