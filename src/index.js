import parsing from './parsers.js';
import formater from './formatters/index.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const obj1 = parsing(filepath1);
  const obj2 = parsing(filepath2);
  const diff = formater(obj1, obj2, format);
  return diff;
};
export default genDiff;
