(function () {
  "use strict";
  let calculation = [];
  //passes the event object to each event object with a number, (event) parameter semantic
  //event.target is the entire DOM node, targeting the class number in the entire node list
  //created a for loop so the pushNumber function has the click event added to the number button
  function pushNumber(event) {
    // alert(event.target.value);
    document.querySelector('.calculator-screen').value = event.target.value;
    calculation.push(event.target.value);

  }
  const numButtons = document.querySelectorAll(".number");
  for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", pushNumber);
  }

  function pushOperator(event) {
    // alert(event.target.value);
    calculation.push(event.target.value);
  }

  const operatorButtons = document.querySelectorAll(
    ".operator, .clear, .plus-minus, .percent, .decimal"
  );
  for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", pushOperator);
  }
  function clear(event) {
    calculation = [];
    document.querySelector('.calculator-screen').value = "0";
  }

  function calculate(event) {
    // alert(event.target.value);
    //for each element in the array
    //iterate through the array and do the actual operations
    let input = "";
    for (let i = 0; i < calculation.length; i++) {
      let num = calculation[i];
      if (isNaN(num)) {
        //adding an empty space to get ready to split the array(not a number), adding a space between the operators
        num = num + " ";
        input = input + " ";
      }
      input += num;
    }
    console.log("input is" + input);
    //do a split to create a new array
    let newArray = input.split(" ");
    console.log(newArray);
    let finalAnswer = 0;
    for (let i = 0; i < newArray.length; i++) {
      //find previous the value that is not an operator, instead a numeric value
      let num1 = 0;
      if (i > 0) {
        //must be an element after the first one
        for (let x = i - 1; x >= 0; x--)
          //traverse the array from the current position to the previous positions until we find the last numeric value
          if (!isNaN(newArray[x])) {
            num1 = newArray[x];
          }
      }
      let currentValue = newArray[i];
      let lastNum = newArray.length - 1;
      //must know which is the last position of the array to know when to stop
      //check the last num in the array to see it's position
      if (currentValue === "+" && i != lastNum) {
        let num2 = newArray[i + 1];
        if (!isNaN(num2)) {
          finalAnswer = Number(num1) + Number(num2);
        }
      }
      if (currentValue === "-" && i != lastNum) {
        let num2 = newArray[i + 1];
        if (!isNaN(num2)) {
          finalAnswer = Number(num1) - Number(num2);
        }
      }
      if (currentValue === "*" && i != lastNum) {
        let num2 = newArray[i + 1];
        if (!isNaN(num2)) {
          finalAnswer = Number(num1) * Number(num2);
        }
      }
      if (currentValue === "/" && i != lastNum) {
        let num2 = newArray[i + 1];
        if (!isNaN(num2)) {
          finalAnswer = Number(num1) / Number(num2);
        }
      }
      if (i === lastNum) {
        //keeps last value in memory(in the array)
        calculation = [finalAnswer];
        console.log("New calculation" + calculation);
        document.querySelector('.calculator-screen').value = finalAnswer;
        return finalAnswer;
      }
    }
  }

  const calculateButton = document.querySelector(".equal-sign");
  calculateButton.addEventListener("click", calculate);

  const clearButton = document.querySelector(".clear");
  clearButton.addEventListener("click", clear);

})();

// console.log(calculation[i])
