#! /usr/bin/env node
import inquirer from "inquirer";

class Student {
    name: string

    constructor(n: string) {
        this.name = n
    }
}

class Person {
    students: Student[] = []

    addStudent(obj: Student) {
        this.students.push(obj)
    }
}

const persons = new Person()


const programStart = async (persons: Person) => {
    do {
        console.log("Welcome Guest")

        const ans = await inquirer.prompt({
            type: "list",
            message: "Who would you like to talk to?",
            name: "select",
            choices: ["teacher", "student", "exit"],
        });

        if (ans.select == "teacher") {
            console.log("hello! i am you teacher?")
            console.log("i am good.")
        }
        if (ans.select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "which person you want to talk",
                name: "student",
            });

            const student = persons.students.find(val => val.name == ans.student);

            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);

                console.log(`Hello i am ${name.name}, i am fine`);
                console.log(persons.students);
            }

            if (student) {
                console.log(`Hello i am ${student.name}, i am fine.....student available`);
                console.log(persons.students);
            }
        }

        if (ans.select == "exit") {
            return;
        }
    }
    while (true)
}

programStart(persons);