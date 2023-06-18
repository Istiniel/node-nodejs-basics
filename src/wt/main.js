import path from 'path';
import { Worker } from 'node:worker_threads';
import getDirname from './../getDirname.js';
const __dirname = getDirname(import.meta.url);
import OS from 'node:os';
let coresNumber = OS.cpus().length;

const performCalculations = async () => {
  const result = new Array(coresNumber).fill(undefined);

  for (let i = 10, j = 0; j <= coresNumber; i++, j++) {
    result[j] = createWorker(i);
  }

  return Promise.all(result);
};

function createWorker(index) {
  return new Promise(function (resolve) {
    const worker = new Worker(path.resolve(__dirname, 'worker.js'), {
      workerData: index,
    });

    worker.on('message', (response) =>
      resolve({ status: 'resolved', data: response })
    );

    worker.on('error', () => resolve({ status: 'error', data: null }));
  });
}

const result = await performCalculations();
console.log(result);
