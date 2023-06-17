import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import getDirname from '../getDirname.js';
import { pipeline } from 'stream';
const __dirname = getDirname(import.meta.url);

const decompress = async () => {
  const fileToRead = path.resolve(__dirname, 'files/archive.gz');
  const fileToWrite = path.resolve(__dirname, 'files/fileToCompress.txt');

  const gZip = createUnzip();
  const readStream = createReadStream(fileToRead);
  const writeStream = createWriteStream(fileToWrite);
  pipeline(readStream, gZip, writeStream, (err) => console.log(err));
};

await decompress();
