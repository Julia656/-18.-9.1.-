function sumSalaries(department) {
  if (Array.isArray(department)) {
     
      return department.reduce((sum, employee) => sum + employee.salary, 0);
  } else {
     
      return Object.values(department).reduce((sum, subDept) => sum + sumSalaries(subDept), 0);
  }
}

let totalSalary = sumSalaries(company);
console.log(totalSalary); 
