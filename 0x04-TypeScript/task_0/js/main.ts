export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: 'Abdul',
  lastName: 'Aliyu',
  age: 30,
  location: 'Abuja',
};

const student2: Student = {
  firstName: 'Aliyu',
  lastName: 'Adekola',
  age: 30,
  location: 'Kaduna',
};

const  studentsList: Student[] = [
  student1, student2
];

