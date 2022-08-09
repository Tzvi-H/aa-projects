class Employee {
  constructor(name, salary, title, manager) {
    this.name = name;
    this.salary = salary;
    this.title = title;
    this.manager = manager || null;
    if (manager) {
      manager.addEmployee(this);
    }
  }

  calculateBonus(multiplier) {
    return this.salary * multiplier;
  }
}

const raph = new Employee("Raphael", 90000, "Ninja");
const donny = new Employee("Donatello", 85000, "Grasshopper");

module.exports = Employee;
