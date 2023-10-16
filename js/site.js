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
        let fbArray =  generateFizzBuzz(startValue, endValue);
        // display the list of numbers
        displayFizzBuzz(fbArray);
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
function generateFizzBuzz(start, end){

    // create variable for the list of numbers
    numbers = [];

    // create a for loop to add number to the list
    for (let n = start; n <= end; n++){
        // create a variable for the current number, class name, and buzz word
        if(n % 3 == 0 && n % 5 == 0){
            numbers.push('FizzBuzz')
        }
        if(n % 3 == 0){
            numbers.push('Fizz');
        }
        else if (n % 5 == 0){
            numbers.push('Buzz');
        }
        else {
            numbers.push(n);        
        }
    }
    // return the list of numbers
    return numbers;
}


// display the list of numbers
function displayFizzBuzz(numbers){
    // create a variable for the HTML + numbers
    let html = '';

    // make a loop to get each number from the array
    for (let index = 0; index < numbers.length; index += 1){
        
        let className = '';
        let currentValue = numbers[index];

        if (currentValue == 'Fizz' ){
            className = 'fizz';
        } else if (currentValue == 'Buzz'){
            className = 'buzz';
        }
        else if (currentValue == 'FizzBuzz') {
            className = 'fizzbuzz';
        } 
        else{
            className = '';
        }
        html +=  `<tr><td class="${className}">${currentValue}</td></tr>`; 
    }
    
    // with each number, put it on the page
    // e.g. <tr><td> i </td></tr>
    let tbody = document.getElementById('results');
    tbody.innerHTML = html;
}