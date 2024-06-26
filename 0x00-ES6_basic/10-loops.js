export default function appendToEachArrayValue(array, appendString) {
  const nArray = [];
  for (let el of array) {
    nArray.push(appendString + el);
  }
  return nArray;
}
