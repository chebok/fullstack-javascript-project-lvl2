import _ from 'lodash';
import isObject from '../isObject.js';
const plain = (objNum1, objNum2) => {
  const iter = (obj1, obj2, depth = '') => {
    const callback = (key) => {
      const checking = (value) => {
        if (isObject(value)) {
          return '[complex value]';
        }
        if (typeof value === 'string') {
          return `'${value}'`;
        } return `${value}`;
      };
      if (!keys2.includes(key)) {
        return (`Property '${depth}${key}' was removed`);
      }
      if (!keys1.includes(key)) {
        return (`Property '${depth}${key}' was added with value: ${checking(obj2[key])}`);
      }
      if (keys1.includes(key) && keys2.includes(key)) {
        if (isObject(obj1[key]) && isObject(obj2[key])) {
          return (`${iter(obj1[key], obj2[key], (`${depth}${key}.`))}`);
        }
        if (obj1[key] !== obj2[key]) {
          return (`Property '${depth}${key}' was updated. From ${checking(obj1[key])} to ${checking(obj2[key])}`);
        } return 'no changes';
      }   
    }
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        const sortKeys = _.uniq(_.union(keys1, keys2)).sort();
        const difference = sortKeys.map(callback);
        const cleanDifference = difference.filter((value) => value !== 'no changes');
        const resulting = (dif) => (`${dif.join('\n')}`);
        return resulting(cleanDifference);
      }
      return iter(objNum1, objNum2);
};
export default plain;