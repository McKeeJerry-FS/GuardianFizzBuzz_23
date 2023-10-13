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
        // send values to generate list of numbers
        generateListOfNumbers(startValue, endValue);
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

    
}

// generate the list of numbers
function generateListOfNumbers(start, end){

    // create variable for the list of numbers
    numbers = [];

    for (let n = start; n <= end; n++){
        numbers.push(n)
    }
    return numbers;
}


// display the list of numbers
function displayListOfNumbers(){

}