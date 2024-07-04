export default function cleanSet(set, startString) {
  let result = '';
  if (startString) {
    set.forEach((el) => {
      if (el.startsWith(startString)) {
        result += (result ? '-' : '') + el.slice(startString.length);
      }
    });
  }
  return result;
}
