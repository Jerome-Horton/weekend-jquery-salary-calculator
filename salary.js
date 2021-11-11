$(document).ready(readyNow);
console.log('JQ');

function readyNow(){
    $('#submitButton').on('click', newInfo);
    $('#salaryTable').on('click', '.deleteButton', deleteEmployeeInfo);
    $('#calculateTotal').on('click', '.annualSalary', deleteEmployeeInfo);
}

let totalSalary = [80000, 58000, 48000];

// create a function to pass on the new info from the subtmit button.
function newInfo(event){
    console.log('Submit new info!');
// create an object to contain the information from the input fields.
    let addEmployee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        id: $('#id').val(),
        title: $('#title').val(),
        annualSalary: Number($('#annualSalary').val()) 
    }
// Push the salary information from input fields to the array to calculate total monthly income.
    totalSalary.push(addEmployee.annualSalary);

//Append submit button to calculate monthly salary &
//append all employees information to the DOM (employee table)
    $('#salaryTable').append(
        `<tr>
        <td>${addEmployee.firstName}</td>
        <td>${addEmployee.lastName}</td>
        <td>${addEmployee.id}</td>
        <td>${addEmployee.title}</td>
        <td>$${addEmployee.annualSalary }</td>
        <td><button class="deleteButton">Delete</button></td>
    </tr>`
    )

//Calculate Monthly Salaray using stored employees information.
//append monthly salary to the DOM (employee table)

let el = $('.calculateTotal');
el.empty();
el.append(totalSalary);

$('#firstName').val('');
$('#firstName').val('');
$('#id').val('');
$('#title').val('');
$('#annualSalary').val('');

//Prevent the form submit default, use: event.preventDefault();

//if total monthly cost exceeds $20,000, add a red background!


}   

