import { createHash } from 'node:crypto';
import getDirname from '../getDirname.js';
import path from 'node:path';

const calculateHash = async () => {
  const result = createHash('sha3-256')
    .update(
      path.resolve(
        getDirname(import.meta.url),
        'files',
        'fileToCalculateHashFor.txt'
      )
    )
    .digest('hex');
  console.log(result);
  return result;
};

await calculateHash();
