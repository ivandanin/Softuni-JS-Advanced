class Company {
    constructor() {
        this.departments = {};
    }
    
    addEmployee(name, salary, position, department) {
        
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!')
        } else {
            if (!this.departments[department]) {
                this.departments[department] = [];
            }
            this.departments[department]
            .push({name, salary, position});

            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
    }

    bestDepartment() {
        
        let sortedDepts = Object
        .entries(this.departments)
        .sort((a, b) => this.getAvgSalary(b[1]) - this.getAvgSalary(a[1]));
        
        let bestDept = sortedDepts[0];
        let avgSalary = this.getAvgSalary(bestDept[1]);

        let sortedEmployees = bestDept[1]
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => b.salary - a.salary);

        let result = `Best Department is: ${bestDept[0]}\nAverage Salary: ${avgSalary.toFixed(2)}\n`

        for (const employee of sortedEmployees) {
            result += `${employee.name} ${employee.salary} ${employee.position}\n`;        
        }

        return result;
    }
    getAvgSalary(deptEmployees) {
        return deptEmployees
        .reduce((a, e) => a += e.salary, 0) / deptEmployees.length;
    }
}

let c = new Company();
let actual1 = c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());