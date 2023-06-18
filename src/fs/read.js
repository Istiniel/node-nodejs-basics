import { readFile } from 'node:fs/promises';
import path from 'path';
import getDirname from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const read = async () => {
  const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');

  try {
    const content = await readFile(filePath, { encoding: 'utf8' });
    console.log(content);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }
};

await read();
