const fs = require('fs');

class Employees {
	constructor(filename) {
		this.filename = filename;
	}

	getEmployees() {
		return JSON.parse(fs.readFileSync(this.filename));
	}
}

module.exports = Employees;