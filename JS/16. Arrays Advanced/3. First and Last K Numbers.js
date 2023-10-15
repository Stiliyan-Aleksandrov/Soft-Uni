function firstAndLastKNumbers(inputArray) {

    const k = inputArray[0];
    const firstK = inputArray.slice(1, k + 1);
    const lastK = inputArray.slice(-k);
    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}