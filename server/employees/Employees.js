const fs = require('fs');

class Employees {
	constructor(filename) {
		this.filename = filename;
	}

	getEmployees() {
		return JSON.parse(fs.readFileSync(this.filename));
	}

	saveEmployee(editedEmployee) {
		let employees = this.getEmployees();
		let selectedEmployee = employees.filter(employee => employee.id === editedEmployee.id)[0];
		Object.keys(editedEmployee).forEach(key => {
			selectedEmployee[key] = editedEmployee[key];
		});
		fs.writeFileSync(this.filename, JSON.stringify(employees));
	}

	createEmployee(newEmployee) {
		let employees = this.getEmployees();
		let maxId = employees.reduce((maxId, employee) => {
			if (employee.id > maxId) {
				maxId = employee.id;
			}
			return maxId;
		}, 0);
		newEmployee.id = maxId + 1;
		employees.push(newEmployee);
		fs.writeFileSync(this.filename, JSON.stringify(employees));
	}
}

module.exports = Employees;