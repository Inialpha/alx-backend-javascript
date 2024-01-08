export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || (typeof startString !== 'string')) {
    return '';
  }

  const newString = [];
  for (const value of set.values()) {
    if (value.startsWith(startString)) {
      const subString = value.substring(startString.length);
      newString.push(subString);
    }
  }
  return newString.join('-');
}
