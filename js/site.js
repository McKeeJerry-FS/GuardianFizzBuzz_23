// from site.js

// Get the numbers from the page
function getValues(){

    // Create the variables
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;

    // convert text to integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // Validate the user input
    if (Number.isInteger(startValue) && Number.isInteger(endValue) && startValue < endValue){

    }
    else
    {
        Swal.fire(
            {
                icon: 'error',
                backdrop: false,
                title: 'Oops',
                text: 'Please enter valid numbers only. Ensure Starting value is less than the Ending Value.'
            });
    }

    // test the connection to the form
}

// generate the list of numbers
function generateListOfNumbers(){

}


// display the list of numbers
function displayListOfNumbers(){

}