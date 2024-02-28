const fs = require('fs');
const http = require('http');

const dbFile = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (database) => new Promise((resolve, reject) => {
  // read fle as string
  fs.readFile(database, 'utf-8', (err, data) => {
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

      // calculate total students

      let total = 0;
      for (const group of Object.values(groups)) {
        total += group.length;
      }

      // log details

      const response = [];

      response.push(`Number of students: ${total}`);
      for (const [field, group] of Object.entries(groups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');

        response.push(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(response.join('\n'));
    }
  });
});

const app = http.createServer();
app.on('request', (req, res) => {
  const text = 'Hello Holberton School!';
  if (req.url === '/') {
    res.setHeader('content-Type', 'text/plain');
    res.setHeader('content-Length', text.length);
    res.statusCode = 200;
    res.write(Buffer.from(text));
  } else if (req.url === '/students') {
    const text = ['This is the list of our students'];
    countStudents(dbFile)
      .then((students) => {
        text.push(students);
        const response = text.join('\n');
        res.setHeader('content-Type', 'text/plain');
        res.setHeader('content-Length', response.length);
        res.statusCode = 200;
        res.write(Buffer.from(response));
      })
      .catch((err) => {
        text.push(err instanceof Error ? err.message : err.toString());
        const response = text.join('\n');
        res.setHeader('content-Type', 'text/plain');
        res.setHeader('content-Length', response.length);
        res.statusCode = 200;
        res.write(Buffer.from(response));
      });
  }
});

app.listen(1245);
module.exports = app;
