const fs = require('fs');

const countStudents = (database) => {
  // check file existence and type

  if (!fs.existsSync(database) || !fs.statSync(database).isFile()) {
    throw new Error('Cannot load the database');
  }

  // read fle as string
  const file = fs
    .readFileSync(database, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');

  // get data field

  const fieldName = file[0].split(',');
  const studentField = fieldName.slice(0, fieldName.length - 1);

  const groups = {};

  // process file lines

  for (const line of file.slice(1)) {
    const studentInfo = line.split(',');
    const studentValue = studentInfo.slice(0, studentInfo.length - 1);
    const field = studentInfo[studentInfo.length - 1];
    if (!Object.keys(groups).includes(field)) {
      groups[field] = [];
    }

    const entries = studentField
      .map((fieldName, idx) => [fieldName, studentValue[idx]]);
    groups[field].push(Object.fromEntries(entries));
  }

  // calculate total students

  let total = 0;
  for (const group of Object.values(groups)) {
    total += group.length;
  }

  // log details

  console.log(`Number of students: ${total}`);
  for (const [field, group] of Object.entries(groups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');

    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
