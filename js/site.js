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
        let generatedValues =  generateListOfNumbers(startValue, endValue);
        // display the list of numbers
        displayListOfNumbers(generatedValues);
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
function displayListOfNumbers(numbers){
    // create a variable that will hold the HTML string
    let html = '';

    // create a loop that will get each number from the array
    for(let i = 0; i < numbers.length; i++){
        // create a variable for the current number
        let currentNumber = numbers[i];

        // create a condition that looks for divisible requirements
        if(currentNumber % 3 == 0 && currentNumber % 5 == 0)
        {
            html += `<tr><td>FIZZBUZZ</tr></td>`
        }
        else if(currentNumber % 3 == 0)
        {
            html += `<tr><td>FIZZ</tr></td>`
        }
        else if(currentNumber % 5 == 0)
        {
            html += `<tr><td>BUZZ</tr></td>`
        }
        else
        {
            html += `<tr><td>${currentNumber}</tr></td>`
        }
    }
    let tbody = document.getElementById('results');
    tbody.innerHTML = html;
}