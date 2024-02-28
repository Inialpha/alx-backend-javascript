import fs from 'fs';

export default function readDatabase(dbFile) {
  return new Promise((resolve, reject) => {
  // read fle as string
    fs.readFile(dbFile, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }

      if (data) {
        const file = data
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

        resolve(groups);
      }
    });
  });
}
