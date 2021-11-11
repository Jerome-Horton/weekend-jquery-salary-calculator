$(document).ready(readyNow);
console.log('JQ');

let employees = [];
let totalSalary = 0;

function readyNow(){
    console.log('jQuery Ready');
    renderTable(employees);
    renderTotalSalary(employees);
    $('#submitButton').on('click', employeeTable);
    $('#salaryTable').on('click', '#delete-button', deleteNewEmployee);
}
// create an object to contain the information from the input fields.
function employeeTable(){
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();

    let addEmployee = {
        firstName: firstName,
        lastName: lastName,
        id: id,
        title: title,
        annualSalary:Number(annualSalary)  
    }
// Push employee information from input fields to the array
    employees.push(addEmployee);
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');
// declared functions to render table, calculate salary, and establish total salary.
    calculateTotalSalary(totalSalary)
    renderTable(employees)
    renderTotalSalary()

}
    function renderTable(tableDataToRender){
        $('#salaryTable').empty();
        for (let employee of tableDataToRender){
            let newEmployeeTableRow =
            `<tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>$${employee.annualSalary }</td>
            <td><button class="deleteButton">Delete</button></td>
        </tr>`;
//append all employees information to the DOM
            $('#salaryTable').append(newEmployeeTableRow);
        }
    }

    function renderTotalSalary(){
        let totalSalary = calculateTotalSalary();
        $('#monthlyTotalSalary').text(`${totalSalary}`);
    }


//Calculate Monthly Salaray using stored employees salary information.
    function calculateTotalSalary() {
        let totalSalary = 0;
        for (employee of employees){
            totalSalary += (employee.annualSalary/12);
//if total monthly cost exceeds $20,000, add a red background!
         if ( totalSalary > 20000 ) {
                $('h4').css('background-color', 'red');
            }
        }
        totalSalary = totalSalary.toFixed(2)
        return totalSalary;
    }

// Fucntion delete=button to delete employee from table
    function deleteNewEmployee() {
        console.log("Delete Button is working!");
        let employeeID = $(this).parent().parent().attr('id');
        console.log(employeedID);
        employeeID = (employeeID);
        console.log(employeeID);
        $(this).parent().parent().remove();
        let index = employees.findIndex(function (employee) {
            return employee.id === employeeID;
        });
        employees.splice(index, 1);
        renderTable(employees);
    }

        renderTotalSalary();