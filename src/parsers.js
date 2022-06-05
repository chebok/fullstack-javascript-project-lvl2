import { readFileSync } from 'node:fs';
import yaml from 'js-yaml';
import path from 'node:path';
const parsing = (filePath) => {
  const nameDir = '/home/chebok/fullstack-javascript-project-lvl2';
  let pathfix = filePath;
  if (!filePath.startsWith(nameDir)) {
    pathfix = path.resolve('/home/chebok/fullstack-javascript-project-lvl2', filePath);
  }
  const ext = path.extname(pathfix);
  if (ext === '.json') {
    return JSON.parse(readFileSync(pathfix));
  }
  if (ext === '.yaml' || ext === '.yml') {
    return yaml.load(readFileSync(pathfix));
  } 
};
export default parsing;