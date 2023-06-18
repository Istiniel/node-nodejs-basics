import { createHash } from 'node:crypto';
import getDirname from '../getDirname.js';
import path from 'node:path';
import { readFile } from 'node:fs/promises';

const calculateHash = async (targetPath) => {
  const file = await readFile(targetPath, { encoding: 'utf8' });

  const result = createHash('sha3-256').update(file).digest('hex');
  console.log(result);
  return result;
};

const targetPath = path.resolve(
  getDirname(import.meta.url),
  'files',
  'fileToCalculateHashFor.txt'
);

await calculateHash(targetPath);
