import { spawn } from 'node:child_process';
import path from 'path';
import getDirname from '../getDirname.js';
const __dirname = getDirname(import.meta.url);

const spawnChildProcess = async (args) => {
  const childUrl = path.resolve(__dirname, 'files', `script.js`);

  const child = spawn('node', [childUrl, ...args], {
    stdio: [0, 1, 2, 'ipc'],
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
