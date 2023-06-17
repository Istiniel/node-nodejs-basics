import { rm, stat } from 'node:fs/promises';
import path from 'path';
import getDirname from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const remove = async () => {
  const filePath = path.resolve(__dirname, 'files', 'fileToRemove.txt');

  try {
    await stat(filePath);
    await rm(filePath, { recursive: false });
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw error;
    }
  }
};

await remove();
