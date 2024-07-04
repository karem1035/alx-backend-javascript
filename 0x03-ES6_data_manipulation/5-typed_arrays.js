export default function createInt8TypedArray(length, position, value) {
  // Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const int8Array = new Int8Array(length);

  // Set the value at the specified position
  int8Array[position] = value;

  // Return the ArrayBuffer
  return int8Array.buffer;
}
