const Manager = require("./manager");

const emp1 = new Manager("Hobbes", 1000000, "Founder");
const emp2 = new Manager("Calvin", 130000, "Director", emp1);
const emp3 = new Manager("Susie", 100000, "TA Manager", emp2);
const emp4 = new Manager("Lily", 90000, "TA", emp3);
const emp5 = new Manager("Clifford", 90000, "TA", emp3);

console.log(emp1.calculateBonus(0.05));
console.log(emp2.calculateBonus(0.05));
console.log(emp3.calculateBonus(0.05));
console.log(emp4.calculateBonus(0.05));
console.log(emp5.calculateBonus(0.05));
