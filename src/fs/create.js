import { writeFile, stat } from 'node:fs/promises';
import path from 'path';
import getDirname from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const create = async () => {
  const filePath = path.resolve(__dirname, 'files', 'fresh.txt');

  try {
    const stats = await stat(filePath);
    if (stats) {
      throw new Error('FS operation failed');
    }
  } catch (error) {
    if (error.message === 'FS operation failed') {
      throw error;
    }
    await writeFile(filePath, 'I am fresh and young');
  }
};

await create();
