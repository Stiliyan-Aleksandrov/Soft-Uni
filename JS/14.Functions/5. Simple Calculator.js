function simpleCalculator(a, b, operator) {
    let arrowMultiply = (a, b) => a * b;
    let arrowDivide = (a, b) => a / b;
    let arrowAdd = (a, b) => a + b;
    let arrowSubtract = (a, b) => a - b;
    switch (operator) {
        case 'multiply':
            console.log(arrowMultiply(a,b));
            break;
        case 'divide':
            console.log(arrowDivide(a,b));
            break;
        case 'add':
            console.log(arrowAdd(a,b));
            break;
        case 'subtract':
         console.log(arrowSubtract(a,b));
            break;
    }
} simpleCalculator (5,

    5,

    'multiply')