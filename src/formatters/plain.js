import isObject from '../isObject.js';
import makeDiff from '../makeDiff.js';

const plain2 = (obj1, obj2) => {
  const difference = makeDiff(obj1, obj2);
  const iter = (difference, depth = '') => {
    const callback = (difObj) => {
      const checking = (value) => {
        if (isObject(value)) {
          return '[complex value]';
        }
        if (typeof value === 'string') {
          return `'${value}'`;
        } return `${value}`;
      };
      switch (difObj.status) {
        case '-':
          return (`Property '${depth}${difObj.key}' was removed`);
        case '+':
          return (`Property '${depth}${difObj.key}' was added with value: ${checking(difObj.value)}`);
        case '-+':
          return (`Property '${depth}${difObj.key}' was updated. From ${checking(difObj.value1)} to ${checking(difObj.value2)}`);
        case '0':
          return 'no changes';
        case 'nest':
          return (`${iter(difObj.value, (`${depth}${difObj.key}.`))}`);
      }    
    };
    const plainDiff = difference.map(callback);
    const cleanDifference = plainDiff.filter((value) => value !== 'no changes');
    const resulting = (dif) => (`${dif.join('\n')}`);
    return resulting(cleanDifference);
  };
  return iter(difference);
};
export default plain2;
