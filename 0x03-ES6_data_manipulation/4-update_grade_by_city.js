export default function updateStudentGradeByCity(students, city, grades) {
  const newStudents = students.filter((student) => student.location === city)
    .map((student) => {
      const newStudent = { ...student };
      for (const grade of grades) {
        if (grade.studentId === student.id) {
          newStudent.grade = grade.grade;
          return newStudent;
        }
      }
      newStudent.grade = 'N/A';
      return newStudent;
    });
  return newStudents;
}
