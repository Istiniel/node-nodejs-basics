import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import getDirname from '../getDirname.js';
import { pipeline } from 'stream';
const __dirname = getDirname(import.meta.url);

const compress = async () => {
  const fileToRead = path.resolve(__dirname, 'files/fileToCompress.txt');
  const fileToWrite = path.resolve(__dirname, 'files/archive.gz');

  const gZip = createGzip();
  const readStream = createReadStream(fileToRead);
  const writeStream = createWriteStream(fileToWrite);
  pipeline(readStream, gZip, writeStream, (err) => console.log(err));
};

await compress();
