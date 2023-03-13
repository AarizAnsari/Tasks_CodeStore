class Person{
    name:string;
    constructor(name){
        this.name = name;
    }
}
class Course extends Person{
    course:string;
    constructor(course,name){
        super(name);
        this.course = course;
    }
}
class Student extends Course{
    rollno:number;
    constructor(name,course,rollno){
        super(course,name);
        this.rollno = rollno;
    }
}

const student = new Student('Harry','B-Tech',654);

console.log('Student Name : '+student.name);
console.log('Student Course : '+student.course);
console.log('Student Roll No. : '+student.rollno);