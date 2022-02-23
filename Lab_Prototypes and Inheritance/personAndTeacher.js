function personAndTeacher() {
    class Person {
        constructor(name, email) {
        this.name = name;
        this.email = email;
        }
    }
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return {
        Person, Teacher
    }
}

let teacher = personAndTeacher().Teacher;
let teach = new teacher('Edison', 'mathsEdison@gmail.com', 'Maths');
console.log(teach);