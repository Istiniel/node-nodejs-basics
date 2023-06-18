import { readdir, access } from 'node:fs/promises';
import path from 'path';
import getDirname from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const list = async () => {
  const baseDirPath = path.resolve(__dirname, 'files');

  try {
    const filenames = await readdir(baseDirPath);
    await access(baseDirPath);

    for (const filename of filenames) {
      console.log(filename);
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }
};

await list();
