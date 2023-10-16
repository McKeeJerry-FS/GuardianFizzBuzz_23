// from site.js

// Get the numbers from the page
function getValues(){

    // Create the variables
    let fizzValue = document.getElementById('fizzValue').value;
    let buzzValue = document.getElementById('buzzValue').value;

    // convert text to integers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    // Validate the user input
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        // send values to generate list of numbers
        let fbArray =  generateFizzBuzz(fizzValue, buzzValue);
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
                text: 'Please enter valid numbers only.'
            });
    } 
}

// generate the list of numbers
function generateFizzBuzz(fizz, buzz){

    // create variable for the list of numbers
    numbers = [];

    // create a for loop to add number to the list
    for (let n = 1; n <= 100; n++){
        // check to see if condition is met
        if(n % fizz == 0 && n % buzz == 0){
            numbers.push('FizzBuzz')
        }
        else if(n % fizz == 0){
            numbers.push('Fizz');
        }
        else if (n % buzz == 0){
            numbers.push('Buzz');
        }
        else {
            numbers.push(n);        
        }
    }
    // return the array
    return numbers;
}


// display the array generated in generateFizzBuzz
function displayFizzBuzz(numbers){
    
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    
    for (let index = 0; index < numbers.length; index++){
        
        
        let arrayItem = numbers[index];
        let newDiv = document.createElement('div'); // <div></div>
        newDiv.classList.add('col'); // <div class="col"></div>
        newDiv.classList.add(arrayItem) // <div class="col Fizz"></div>

        newDiv.textContent = arrayItem; // <div class="col Fizz">Fizz</div>
        
        resultsDiv.appendChild(newDiv);
    }
}