import _ from 'lodash';
import stringify from '../stringify.js';
import isObject from '../isObject.js';

const stylish = (obj1, obj2) => {
  const iter = (obj1, obj2, depth = 0, replacer = '  ') => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const sortKeys = _.uniq(_.union(keys1, keys2)).sort();
    const callback = (key) => {
      if (keys1.includes(key) && keys2.includes(key)) {
        if (isObject(obj1[key]) && isObject(obj2[key])) {
          return (`${replacer.repeat(2 + 2 * depth)}${key}: ${iter(obj1[key], obj2[key], depth + 1)}`);
        }
        if (obj1[key] === obj2[key]) {
          return (`${replacer.repeat(2 + 2 * depth)}${key}: ${stringify(obj1[key], depth)}`);
        } return (`${replacer.repeat(1 + 2 * depth)}- ${key}: ${stringify(obj1[key], depth)}\n${replacer.repeat(1 + 2 * depth)}+ ${key}: ${stringify(obj2[key], depth)}`);
      }
      if (keys1.includes(key)) {
        return (`${replacer.repeat(1 + 2 * depth)}- ${key}: ${stringify(obj1[key], depth)}`);
      }
      if (keys2.includes(key)) {
        return (`${replacer.repeat(1 + 2 * depth)}+ ${key}: ${stringify(obj2[key], depth)}`); 
      }
    }
    const difference = sortKeys.map(callback);
    const resulting = (dif) => (`{\n${dif.join('\n')}\n${replacer.repeat(depth * 2)}}`);
    return resulting(difference);
  }
  return iter(obj1, obj2);
};
export default stylish;
