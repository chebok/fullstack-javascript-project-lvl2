import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';
import plain2 from './plain2.js';

const formater = (obj1, obj2, format) => {
    switch (format) {
        case 'stylish':
          return stylish(obj1, obj2);
        case 'plain':
          return plain(obj1, obj2);
        case 'plain2':
          return plain2(obj1, obj2); 
        case 'json':
          return json(obj1, obj2);
    }
};
export default formater;