'use strict';

// You get a new job working for Eggman Movers. Your first task is to write a method that will allow the admin staff to enter a person’s name and return what that person's role is in the company.

// You will be given an array of object literals holding the current employees of the company. You code must find the employee with the matching firstName and lastName and then return the role for that employee or if no employee is not found it should return "Does not work here!"

// The array is preloaded and can be referenced using the variable employees ($employees in Ruby). It uses the following structure.



const findEmployeesRole = function(name) {

    const newName = name.split(' ')

    const employees = [
        { firstName: "John", lastName: "Doe", role: "Developer" },
        { firstName: "Jane", lastName: "Smith", role: "Manager" },
        { firstName: "Emily", lastName: "Jones", role: "Designer" }
    ];
   

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].firstName === newName[0] && employees[i].lastName === newName[1]) {
            return employees[i].role
        }
    }

    return "Does not work here!"

}

console.log(findEmployeesRole("John Do"));



