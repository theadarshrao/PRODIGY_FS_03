let employees = JSON.parse(localStorage.getItem("employees")) || [];

const employeeForm = document.getElementById("employeeForm");
const employeeTable = document.getElementById("employeeTable");
const search = document.getElementById("search");

function displayEmployees(list = employees) {

    employeeTable.innerHTML = "";

    list.forEach((employee, index) => {

        employeeTable.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${employee.name}</td>
                <td>${employee.email}</td>
                <td>${employee.department}</td>
                <td>${employee.designation}</td>
                <td>₹${employee.salary}</td>
                <td>
                    <button class="delete-btn"
                    onclick="deleteEmployee(${index})">
                    Delete
                    </button>
                </td>
            </tr>
        `;
    });

}
employeeForm.addEventListener("submit", function(e){

    e.preventDefault();

    const employee = {

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value,
        designation: document.getElementById("designation").value,
        salary: document.getElementById("salary").value

    };

    employees.push(employee);

    localStorage.setItem("employees", JSON.stringify(employees));

    employeeForm.reset();

    displayEmployees();

});

function deleteEmployee(index){

    if(confirm("Delete this employee?")){

        employees.splice(index,1);

        localStorage.setItem("employees", JSON.stringify(employees));

        displayEmployees();

    }

}

function searchEmployee(){

    let value = search.value.toLowerCase();

    let filtered = employees.filter(emp =>

        emp.name.toLowerCase().includes(value) ||
        emp.email.toLowerCase().includes(value) ||
        emp.department.toLowerCase().includes(value) ||
        emp.designation.toLowerCase().includes(value)

    );

    displayEmployees(filtered);

}
displayEmployees();
