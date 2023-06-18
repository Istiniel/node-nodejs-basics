import path from 'path';
import { fileURLToPath } from 'node:url';

export default function getDirname(url) {
  const __filename = fileURLToPath(url);
  const __dirname = path.dirname(__filename);

  return __dirname;
}
