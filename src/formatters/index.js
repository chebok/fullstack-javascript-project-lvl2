import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formater = (obj1, obj2, format) => {
  switch (format) {
    case 'stylish':
      return stylish(obj1, obj2);
    case 'plain':
      return plain(obj1, obj2);
    case 'json':
      return json(obj1, obj2);
  }
};
export default formater;
