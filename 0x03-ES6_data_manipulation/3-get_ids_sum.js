export default function getStudentIdsSum(array) {
  const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  return sum;
}
