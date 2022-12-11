function simpleFunction() {
    console.log('wywołano simpleFunction');
}

simpleFunction();

function rewriteIt(text) {
    console.log(text);
}

rewriteIt('Jakiś tekst');

function sumOfTwo(a, b) {
    let sum = a + b;
    console.log(a + ' + ' + b + ' = ' + sum);
    /* 2 + 2 = 4 */
}

sumOfTwo(2, 3);

function functionWithReturn() {
    return 'zwracany tekst';
}

console.log(functionWithReturn());
