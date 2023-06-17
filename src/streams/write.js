import { createReadStream } from 'node:fs';
import path from 'path';
import getDirname from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const write = async () => {
  const filePath = path.resolve(__dirname, 'files/fileToRead.txt');

  const readStream = createReadStream(filePath, 'utf-8');
  readStream.on('data', (data) => console.log(data));
};

await write();
