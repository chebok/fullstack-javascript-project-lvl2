import makeDiff from "../makeDiff.js";

const json = (obj1, obj2) => {
  const difference = makeDiff(obj1, obj2);
  const myJson = JSON.stringify(difference);
  return myJson;
};
export default json;