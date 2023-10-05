function findLongestEqualSequence(arr) {
    let currentElement = arr[0];
    let currentCount = 1;
    let maxElement = arr[0];
    let maxCount = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === currentElement) {
            currentCount++;
        } else {
            if (currentCount > maxCount) {
                maxElement = currentElement;
                maxCount = currentCount;
            }
            currentElement = arr[i];
            currentCount = 1;
        }
    }


    if (currentCount > maxCount) {
        maxElement = currentElement;
        maxCount = currentCount;
    }


    const longestSequence = Array(maxCount).fill(maxElement);


    console.log(longestSequence.join(' '));
}