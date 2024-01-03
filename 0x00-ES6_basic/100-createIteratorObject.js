export default function createIteratorObject(report) {
  function* iter() {
    for (const dept of Object.values(report.allEmployees)) {
      for (const employees of dept) {
        yield employees;
      }
    }
  }
  return iter();
}
