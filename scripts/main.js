(function () {
    "use strict";
    const calculation = []


    //passes the event object to each event object with a number, (event) parameter semanatic 
    //event.target is the entire DOM node, targeting the class number in the entire node list
    //created a for loop so the pushNumber function has the click event added to the number button
    
    function pushNumber(event) {
        alert(event.target.value);
    }
    const numButtons = document.querySelectorAll('.number');
    for(let i = 0; i < numButtons.length; i++) {
        numButtons[i].addEventListener("click", pushNumber);
    }

    function pushOperator(event) {
        alert(event.target.value);
    }

    const operatorButtons = document.querySelectorAll('.operator, .clear, .plus-minus, .percent, .decimal');
    for(let i = 0; i < operatorButtons.length; i++) {
        operatorButtons[i].addEventListener("click", pushOperator);
        const clearButton = document.querySelector('.clear');
    }

    function calculate(event) {
        alert(event.target.value);
    }

    const calculateButton = document.querySelector('.equal-sign');
        calculateButton.addEventListener("click", calculate);
    
        //need to refactor to push into the array
    


    
})();





