const employees = [
  { id: 1, name: 'Alice', experience: 2 },
  { id: 2, name: 'Bob', experience: 9 },
  { id: 3, name: 'Charlie', experience: 4 },
  { id: 3, name: 'John', experience: 19 },
]

const employeeList = document.querySelector('#listemployees');
const showEmployee = document.querySelector('#showEmployee');

function renderList(filterList) {

  const filteredList = filterList === false ? employees : employees.filter(employee => employee.experience >= 5)


  const employeeListElements = filteredList.map(employee => `
  <li>
    <strong>ID: </strong>${employee.id}<br>
    <strong>Name: </strong>${employee.name}<br>
    <strong>Experience: </strong>${employee.experience}<br>
    <hr>
  </li>
  `)

  employeeList.innerHTML = employeeListElements.join('')
}

renderList(false)


showEmployee.addEventListener('change', function() {
  renderList(showEmployee.checked)
})