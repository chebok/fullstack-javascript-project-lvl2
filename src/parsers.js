import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

const parsing = (filePath) => {
  const ext = path.extname(filePath);
  const result = (ext === 'json') ? JSON.parse(fs.readFileSync(filePath)) : yaml.load(fs.readFileSync(filePath));
  return result;
};
export default parsing;
