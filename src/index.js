import { readFileSync } from 'node:fs';
import process from 'node:process';
import path from 'node:path';
import _ from 'lodash';

const genDiff = (filepath1, filepath2) => {
  const nameDir = '/home/chebok/fullstack-javascript-project-lvl2';
  let path1 = filepath1;
  let path2 = filepath2;
  if (!filepath1.startsWith(nameDir)) {
    path1 = path.resolve('/home/chebok/fullstack-javascript-project-lvl2', filepath1);
  }
  if (!filepath2.startsWith(nameDir)) {
    path2 = path.resolve('/home/chebok/fullstack-javascript-project-lvl2', filepath2);
  }
  
  const obj1 = JSON.parse(readFileSync(path1));
  const obj2 = JSON.parse(readFileSync(path2));
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const sortKeys = [...new Set([...keys1, ...keys2])].sort();

  const callback = (key) => {
      if (keys1.includes(key) && keys2.includes(key)) {
        if (obj1[key] === obj2[key]) {
          return (`    ${key}: ${obj1[key]}`);
        } return (`  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`);
      }
      if (keys1.includes(key)) {
        return (`  - ${key}: ${obj1[key]}`);
      }
      if (keys2.includes(key)) {
        return (`  + ${key}: ${obj2[key]}`);  
      }
  }
  const difference = sortKeys.map(callback);
  const diffToPrint =(`{\n${difference.join('\n')}\n}`);
  return diffToPrint;
};
export default genDiff;
