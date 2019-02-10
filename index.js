#!/usr/bin/env node

const clipboardy = require('clipboardy')

const stdin = process.openStdin();

let data = "";

stdin.on('data', function(chunk) {
  data += chunk;
});

stdin.on('end', function() {
  if (data.length > 0) {
      clipboardy.writeSync(data.trim());
      console.log('\x1b[36m%s\x1b[0m', '✓ copied to clipboard');
  }
});