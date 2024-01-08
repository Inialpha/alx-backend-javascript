export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const arr = new ArrayBuffer(length);
  const buff = new DataView(arr, 0, length);
  buff.setInt8(position, value);
  return buff;
}
