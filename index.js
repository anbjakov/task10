'use strict'

class Employee {
    constructor(firstName,lastName,age,jobPosition,salary){
       // [this.firstName, this.lastName, this.age, this.jobPosition, this.salary] = arguments
        this.firstName = firstName;
        this.lastName =lastName;
        this.age = age;
        this.jobPosition = jobPosition;
        this.salary = salary;
    }
    static vacationDays = 18;
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    getYearSalary(){
        const VACATION_MONTHS = 12;
        return this.salary*VACATION_MONTHS
    }
}

let worker = new Employee('Peter','Griffin',40,'brewer','10');
let engineer = new Employee('Hubert','Farnsworth',160,'mad scientist','20');

console.log(`employee ${worker.fullName}. He earn per year: ${worker.getYearSalary()}`);
console.log(`employee ${engineer.fullName}. He earn per year: ${engineer.getYearSalary()}`);
