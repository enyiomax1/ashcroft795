#!/usr/bin/env node

/**
 * Ensure _redirects file is correct before building
 * This prevents the recurring issue where _redirects becomes a folder with .tsx files
 */

import { existsSync, statSync, rmSync, writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const REDIRECTS_PATH = './public/_redirects';
const REDIRECTS_CONTENT = '/*    /index.html   200\n';

console.log('🔧 Checking _redirects file...\n');

try {
  // Check if _redirects exists
  if (existsSync(REDIRECTS_PATH)) {
    const stats = statSync(REDIRECTS_PATH);
    
    if (stats.isDirectory()) {
      console.log('⚠️  Found _redirects as a directory - removing...');
      rmSync(REDIRECTS_PATH, { recursive: true, force: true });
      console.log('✅ Removed directory\n');
    } else if (stats.isFile()) {
      console.log('✅ _redirects file exists\n');
      return;
    }
  }
  
  // Create public directory if it doesn't exist
  if (!existsSync('./public')) {
    mkdirSync('./public', { recursive: true });
    console.log('📁 Created public directory\n');
  }
  
  // Create the correct _redirects file
  writeFileSync(REDIRECTS_PATH, REDIRECTS_CONTENT, 'utf8');
  console.log('✅ Created _redirects file');
  console.log('📄 Contents:', REDIRECTS_CONTENT);
  
} catch (error) {
  console.error('❌ Error ensuring _redirects file:', error.message);
  process.exit(1);
}

console.log('\n✨ _redirects file is ready!');
