import path from 'node:path';
import { dirname } from 'path';
import genDiff from '../src/index.js';
console.log(dirname('__fixtures__/testPizza2.json'));
const getFixturePath = (filename) => path.join(dirname(filename), '__fixtures__', filename);
const path1 = getFixturePath('testPizza1.json');
const path2 = '__fixtures__/testPizza2.json';
const path3 = '__fixtures__/testFile1.json';
const path4 = '__fixtures__/testFile2.json';
const path5 = '__fixtures__/empty.json';
const diff1 = (`{\n  - cheese: 3\n  + cheese: 4\n    meat: yes\n  - mushrooms: white\n  + mushrooms: lisichke\n  - testo: thin\n  + testo: crust\n}`);
const diff2 = (`{\n  - brain: undefined\n  - girls: cool\n  - http: hexlet.io\n  - ping: 125\n}`);
const diff3 = (`{\n\n}`);
test('genDiff', () => {
  expect(genDiff(path1,path2)).toEqual(diff1);
  expect(genDiff(path3,path4)).toEqual(diff2);
  expect(genDiff(path4,path5)).toEqual(diff3);
});