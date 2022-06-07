import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formater = (obj1, obj2, format) => {
  const stylishDiff = stylish(obj1, obj2);
  const plainDiff = plain(obj1, obj2);
  const jsonDiff = json(obj1, obj2);
  switch (format) {
    case 'plain':
      return plainDiff;
    case 'json':
      return jsonDiff;
    default:
      return stylishDiff;
  }
};
export default formater;
