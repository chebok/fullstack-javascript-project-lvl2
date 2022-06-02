import { readFileSync } from 'node:fs';
import yaml from 'js-yaml';
import path from 'node:path';
const parsing = (filePath) => {
  const ext = path.extname(filePath);
  if (ext === '.json') {
    return JSON.parse(readFileSync(filePath));
  }
  if (ext === '.yaml' || ext === '.yml') {
    return yaml.load(readFileSync(filePath));
  } 
};
export default parsing;