import { createWriteStream } from 'node:fs';
import path from 'path';
import getDirname from '../getDirname.js';
import { stdin } from 'node:process';

const __dirname = getDirname(import.meta.url);

const write = async () => {
  const filePath = path.resolve(__dirname, 'files/fileToWrite.txt');

  const writeStream = createWriteStream(filePath, 'utf-8');
  stdin.on('data', (data) => writeStream.write(data));
};

await write();
