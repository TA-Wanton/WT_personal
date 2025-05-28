const { spawn } = require('child_process');
const path = require('path');

const nextPath = path.join(__dirname, 'node_modules', 'next', 'dist', 'bin', 'next');

const build = spawn('node', [nextPath, 'build'], {
  stdio: 'inherit',
  shell: true
});

build.on('close', (code) => {
  process.exit(code);
}); 