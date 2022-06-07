import _ from 'lodash';
import isObject from './isObject.js';

const makeDiff = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const sortKeys = _.sortBy(_.uniq(_.union(keys1, keys2)));
  const callback = (key) => {
    if (!keys2.includes(key)) {
      return ({ key, status: '-', value: obj1[key] });
    }
    if (!keys1.includes(key)) {
      return ({ key, status: '+', value: obj2[key] });
    }
    if (isObject(obj1[key]) && isObject(obj2[key])) {
      return ({ key, status: 'nest', value: makeDiff(obj1[key], obj2[key]) });
    }
    if (obj1[key] !== obj2[key]) {
      return ({ key, status: '-+', value1: obj1[key], value2: obj2[key] });
    } return ({ key, status: '0', value: obj1[key] });
  }
  const difference = sortKeys.map(callback);
  return difference;
};
export default makeDiff;
