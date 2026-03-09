const company = {

  emp1 : {firstname: "Lakshmi", lastname: "Palaka"},
  emp2 : {firstname: "Sowmya", lastname: "Palaka"},
  emp3 : {firstname: "Khashvi", lastname: "Nagireddy"},

}
for (const employee in company) {
  console.log(company[employee].firstname + " " + company[employee].lastname);
}