class Person {
    name: string = "Charles";
  }
  class Employee extends Person {
    employeeID: number = 457813;
  
    public getEmployee() {
      console.log("Employee name : " + this.name);
      console.log("Employee ID : " + this.employeeID);
    }
  }
  
  const employee = new Employee();
  employee.getEmployee();