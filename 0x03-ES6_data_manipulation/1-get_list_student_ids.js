export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const arrId = array.map((array) => array.id);
  return arrId;
}
