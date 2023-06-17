import { mkdir, readdir, copyFile } from 'node:fs/promises';
import path from 'path';
import getDirname from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const copy = async () => {
  const baseDirPath = path.resolve(__dirname, 'files');
  const newDirPath = path.resolve(__dirname, 'files_copy');

  try {
    await mkdir(newDirPath);
    const filenames = await readdir(baseDirPath);

    for (const filename of filenames) {
      copyFile(
        path.resolve(baseDirPath, filename),
        path.resolve(newDirPath, filename)
      );
    }
  } catch (error) {
    if (error.code === 'EEXIST') {
      throw new Error('FS operation failed');
    }
  }
};

await copy();
