import { writeFile, stat } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    const promise = await writeFile(filePath, 'I am fresh and young');
  }
};

await create();
