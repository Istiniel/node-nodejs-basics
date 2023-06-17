import { rename as renameFile, stat } from 'node:fs/promises';
import path from 'path';
import getDirname from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const rename = async () => {
  const filePath = path.resolve(__dirname, 'files');

  try {
    const stats = await stat(path.resolve(filePath, 'wrongFilename.txt'));

    await renameFile(
      path.resolve(filePath, 'wrongFilename.txt'),
      path.resolve(filePath, 'properFilename.md')
    );
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }
};

await rename();
