import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const filepath = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(filepath)
      .then((groups) => {
        const text = ['This is the list of our students'];
        const sortFunc = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        for (const [field, group] of Object.entries(groups).sort(sortFunc)) {
          const names = group.map((student) => student.firstname).join(', ');
          text.push(`Number of students in ${field}: ${group.length}. List: ${names}`);
        }
        res.status(200);
        res.send(text.join('\n'));
      })
      .catch((err) => {
        res.status(500);
        res.send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(req, res) {
    const filepath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = req.params;
    if (major !== 'SWE' || major !== 'CS') {
      res.status(500);
      res.send('Major parameter must be CS or SWE');
    }
    let response = '';
    readDatabase(filepath)
      .then((groups) => {
        if (Object.keys(groups).includes(major)) {
          const students = groups[major].map((student) => student.firstname).join(', ');
          response = `List: ${students}`;
        }

        res.status(200);
        res.send(response);
      })
      .catch((err) => {
        res.status(500);
        res.send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
