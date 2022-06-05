import path from 'node:path';
import { dirname } from 'path';
import genDiff from '../src/index.js';
import { fileURLToPath } from 'url';
import { readFileSync } from 'node:fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const path1 = getFixturePath('testPizza1.yml');
const path2 = getFixturePath('testPizza2.yaml');
const path3 = getFixturePath('testFile1.json');
const path4 = getFixturePath('testFile2.json');
const path5 = getFixturePath('empty.json');
const path6 = getFixturePath('file1.json');
const path7 = getFixturePath('file2.json');
const path8 = getFixturePath('file1.yaml');
const path9 = getFixturePath('file2.yaml');
const diff1 = getFixturePath('pizzaDiff.txt');
const diff4 = getFixturePath('jsonsDiff.txt');
const diff2 = (`{\n  - brain: undefined\n  - girls: cool\n  - http: hexlet.io\n  - ping: 125\n}`);
const diff3 = (`{\n\n}`);
test('genDiff', () => {
  expect(genDiff(path1,path2)).toEqual(readFileSync(diff1, 'utf8'));
  expect(genDiff(path3,path4)).toEqual(diff2);
  expect(genDiff(path4,path5)).toEqual(diff3);
  expect(genDiff(path6,path7)).toEqual(readFileSync(diff4, 'utf8'));
  expect(genDiff(path8,path9)).toEqual(readFileSync(diff4, 'utf8'));
});