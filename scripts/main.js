(function () {
    "use strict";
    const calculation = []
    //passes the event object to each event object with a number, (event) parameter semantic 
    //event.target is the entire DOM node, targeting the class number in the entire node list
    //created a for loop so the pushNumber function has the click event added to the number button
    function pushNumber(event) {
        // alert(event.target.value);
        calculation.push(event.target.value);
    }
    const numButtons = document.querySelectorAll('.number');
    for(let i = 0; i < numButtons.length; i++) {
        numButtons[i].addEventListener("click", pushNumber);
    }

    function pushOperator(event) {
        // alert(event.target.value);
        calculation.push(event.target.value);
    }

    const operatorButtons = document.querySelectorAll('.operator, .clear, .plus-minus, .percent, .decimal');
    for(let i = 0; i < operatorButtons.length; i++) {
        operatorButtons[i].addEventListener("click", pushOperator);
        const clearButton = document.querySelector('.clear');
    }

    function calculate(event) {
        alert(event.target.value);
        //for each element in the array
        //iterate through the array and do the actual operations
        let input = '';
        for(let i = 0; i < calculation.length; i++) {
            let num = calculation[i];
            if(isNaN(num)){
                num = num + ' ';
                input = input + ' ';
            }
            input += num;
        
        }
        console.log('input is' + input );
        let newArray = input.split(" ");
        console.log(newArray);
        let finalAnswer = 0;
        for(let i = 0; i < newArray.length; i++) {
        //find previous value that is not an operator, instead a numeric value
            let previousNum = 0;
            if (i > 0) {
        //must be an element after the first one
        for (let x = i - 1; x >= 0; x--)
        //traverse the array from the current position to the previous positions until we find the last numeric value
        if(!isNaN(newArray[x])) {
            previousNum = newArray[x];    
        }
        }
        
            }
        let currentValue = newArray[i];
        let lastNum = newArray.length - 1;
        //must know which is the last position of the array to know when to stop
        if(currentValue == '+' && i != lastNum) {
            let nextNum = newArray[i+1];
            if(!isNaN(nextNum)) {
                finalAnswer = Number(num1) + Number(num2)
            }
        }
        if(currentValue == '-' && i != lastNum) {
            let nextNum = newArray[i+1];
            if(!isNaN(nextNum)) {
                finalAnswer = Number(num1) - Number(num2);
            }
        }
        if(currentValue == '*' && i != lastNum) {
            let nextNum = newArray[i+1];
            if(!isNaN(nextNum)) {
                finalAnswer = Number(num1) * Number(num2);
            }
        }
        if(currentValue == '/' && i != lastNum) {
            let nextNum = newArray[i+1];
            if(!isNaN(nextNum)) {
                finalAnswer = Number(num1) / Number(num2);
            }
        }
        if(i == lastNum);
        calculation = [finalAnswer];
        console.log('New calculation' + calculation);
        return finalAnswer;

        }
        
        const calculateButton = document.querySelector('.equal-sign');
        calculateButton.addEventListener("click", calculate);
        
    }

    // console.log(calculation[i])
    
    
)();





