function palindromeInts(arr) {
    for (let num of arr) {
        let numStr = String(num);
        let reversedNumStr = numStr.split(``).reverse().join(``);
        console.log((numStr==reversedNumStr));
    }
}