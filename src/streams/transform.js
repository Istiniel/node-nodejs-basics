import { createWriteStream, createReadStream } from 'node:fs';
import { Transform, pipeline } from 'node:stream';
import path from 'path';
import getDirname from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const transform = async () => {
  const fileToRead = path.resolve(__dirname, 'files/fileToRead.txt');
  const fileToWrite = path.resolve(__dirname, 'files/fileToWrite.txt');

  const readStream = createReadStream(fileToRead, 'utf-8');
  const writeStream = createWriteStream(fileToWrite, 'utf-8');

  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const chunkTrimed = chunk.toString().trim();
      const reversed = chunkTrimed.split('').reverse().join('');
      callback(null, reversed);
    },
  });

  pipeline(readStream, transformStream, writeStream, (err) => console.log(err));
};

await transform();
