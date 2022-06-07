/* eslint-disable no-undef */
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const path6 = getFixturePath('file1.json');
const path7 = getFixturePath('file2.json');
const path8 = getFixturePath('file1.yaml');
const path9 = getFixturePath('file2.yaml');
const diff4 = getFixturePath('jsonsDiff.txt');
const diff5 = getFixturePath('plainDiff.txt');
const diff6 = getFixturePath('eslintJsonFormat.txt');
test('genDiff', () => {
  expect(genDiff(path6, path7)).toEqual(fs.readFileSync(diff4, 'utf8'));
  expect(genDiff(path8, path9)).toEqual(fs.readFileSync(diff4, 'utf8'));
  expect(genDiff(path6, path7, 'plain')).toEqual(fs.readFileSync(diff5, 'utf8'));
  expect(genDiff(path6, path7, 'json')).toEqual(fs.readFileSync(diff6, 'utf8'));
});
