import EmployeeStore from "./hash_table/index.js";

const emp = new EmployeeStore();

emp.add({
  id: 1,
  name: "Alice",
  email: "ALICE@buggysoft.com",
  nationalId: "036098004388",
  department: "DEV",
  skills: ["nodejs", "reactjs", "php"]
});

emp.add({
  id: 2,
  name: "Rebecca",
  email: "ReBecca@buggysoft.com",
  nationalId: "036098004389",
  department: "QA",
  skills: ["reactjs" , "php"]
});

emp.add({
  id: 3,
  name: "Kattie",
  email: "Kattie@buggysoft.com",
  nationalId: "036098004399",
  department: "QA",
  skills: ["nodejs", 'php', 'go']
});



console.log(emp.updateSkill(1, ['java', 'golang', 'ruby']))
console.log(emp.listEmpBySkill('php'))