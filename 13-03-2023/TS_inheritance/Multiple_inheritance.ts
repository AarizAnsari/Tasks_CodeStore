//Multiple Inheritance can not be directly achieved in TypeScript 
//but it can be implemented using Interface

class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  class Course {
    course: string;
    constructor(course: string) {
      this.course = course;
    }
  }
  interface Student extends Person, Course {
    rollno: number;
  }
  
  let student: Student = {
    rollno: 5489,
    course: "MBA",
    name: "Peter"
  };
  
  console.log("Name : " + student.name);
  console.log("Course : " + student.course);
  console.log("Roll No : " + student.rollno);