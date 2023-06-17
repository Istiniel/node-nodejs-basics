import { createReadStream } from 'node:fs';
import path from 'path';
import getDirname from '../getDirname.js';
import { stdout } from 'node:process';

const __dirname = getDirname(import.meta.url);

const read = async () => {
  const filePath = path.resolve(__dirname, 'files/fileToRead.txt');

  const readStream = createReadStream(filePath, 'utf-8');
  readStream.on('data', (data) => stdout.write(data));
};

await read();
