import maths from "../helpers/maths.js";
import util from "../helpers/util.js";

let calc = {
    firstNumber: '',
    secondNumber: '',
    mathType: '',
    display: ''
};

const setDisplay = (numToPrint) => {
    calc.display = numToPrint;
    util.printToDom('result', calc.display);
};
const addNumber = (num) => {
    console.log(num);
    if (calc.mathType === '') {
        calc.firstNumber += num;
        setDisplay(calc.firstNumber)
        } else {
        calc.secondNumber += num;
        setDisplay(calc.secondNumber);
        }
};

const setMathType = (newType) => {
    console.log(newType);
    calc.mathType = newType;
};

const calculate = () => {
    let answer  = 0;
    switch(calc.mathType) {
        case 'add':
            answer = maths.add(calc.firstNumber, calc.secondNumber);
            break;
        case 'subtract':
            answer = maths.subtract(calc.firstNumber, calc.secondNumber);
            break;
        case 'multiply':
            answer = maths.multiply(calc.firstNumber, calc.secondNumber);
            break;
        case 'divide':
            answer = maths.divide(calc.firstNumber, calc.secondNumber);
            break;
        default:
            answer = 'You broke it';
    }
    setDisplay(answer);
};

export default { addNumber, setMathType, calculate };
