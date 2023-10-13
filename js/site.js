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
        // display a SweetAlert if validation fails
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

    // create a for loop to add number to the list
    for (let n = start; n <= end; n++){
        numbers.push(n)
    }
    // return the list of numbers
    return numbers;
}


// display the list of numbers
function displayListOfNumbers(numbers){
    // create a variable that will hold the HTML string
    let html = '';

    // create a loop that will get each number from the array
    for(let i = 0; i < numbers.length; i++){
        // create a variable for the current number, class name, and buzz word
        let currentNumber = numbers[i];
        let buzzWord = '';
        let className = '';

        // create a condition that looks for divisible requirements
        // and creates the proper HTML code for the table row
        if(currentNumber % 3 == 0 && currentNumber % 5 == 0)
        {
            className = 'fizzbuzz';
            buzzWord = 'FIZZBUZZ';
            html += `<tr><td class="${className}">${buzzWord}</tr></td>`
        }
        else if(currentNumber % 3 == 0)
        {
            className = 'fizz';
            buzzWord = 'FIZZ';
            html += `<tr><td class="${className}">${buzzWord}</tr></td>`
        }
        else if(currentNumber % 5 == 0)
        {
            className = 'buzz';
            buzzWord = 'BUZZ';
            html += `<tr><td class="${className}">${buzzWord}</tr></td>`
        }
        else
        {
            html += `<tr><td>${currentNumber}</tr></td>`;
        }
       
    }
    // once the row is created, place that row on to the page with the correct
    // data and classes for styling
    let tbody = document.getElementById('results');
    tbody.innerHTML = html;
}