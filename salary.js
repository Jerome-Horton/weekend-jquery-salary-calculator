$(document).ready(readyNow);
console.log('JQ');

function readyNow(){
    $('#submitButton').on('click', newInfo);

}


// create a function to pass on the new info from the subtmit button.
function newInfo(event){
    console.log('new info!');
// create an object to contain the information from the input fields.
    let addEmployess = {
        firstname: $('#firstName').val(),
        lastName: $('#lastName').val(),
        id: $('#id').val(),
        title: $('#title').val(),
        annaulSalary: $('#annaulSalary').val(),  
    }
}

    
}
