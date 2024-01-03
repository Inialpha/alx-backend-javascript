export default function iterateThroughObject(reportWithIterator) {
  const list = [];
  for (const employee of reportWithIterator) {
    list.push(employee);
  }
  return list.join(' | ');
}
