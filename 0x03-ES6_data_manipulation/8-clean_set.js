export default function cleanSet(set, startString) {
  if (!startString) return ''; // Return empty string if startString is falsy

  const array = Array.from(set);
  const sslength = startString.length;

  // Use map to transform elements that start with startString
  const cleanedArray = array.map((el) => {
    if (el.startsWith(startString)) {
      return el.substring(sslength);
    }
    return el; // Return original element if no change needed
  });

  // Join cleanedArray with '-' and return the result
  return cleanedArray.join('-');
}
