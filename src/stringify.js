const stringify = (value, depth = 0, replacer = '    ') => {
    if (typeof value !== 'object' || value === null) {
      return String(value);
    }
    const keys = Object.keys(value);
    const stringin = keys.map((key) => {
      if (typeof value[key] !== 'object' || value === null) {
        return (`${replacer.repeat(depth + 2)}${key}: ${value[key]}\n`);
      } return (`${replacer.repeat(depth + 2)}${key}: ${stringify(value[key], depth + 1, replacer)}\n`);
    });
    return (`{\n${stringin.join('')}${replacer.repeat(1 + depth)}}`);
  };
  export default stringify;