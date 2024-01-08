export default function getStudentsByLocation(array, string) {
  const arrLoc = array.filter((arr) => arr.location === string);
  return arrLoc;
}
