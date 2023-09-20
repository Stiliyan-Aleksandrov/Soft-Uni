function solve(input) {
    let username = input[0];
    let pass = ``;
    let counter = 0;
    let guess = input[1];
    let index = 2;
    for (let i = username.length - 1; i >= 0; i--) {
        pass += username[i];
    }
    while (guess != pass) {
        guess = input[index];
        index++;
        counter++;
        console.log(`Incorrect password. Try again.`);
        if (counter == 4) {
            console.log(`User ${username} blocked!`);
            return;
        }
    }
    console.log(`User ${username} logged in!`);
}
solve(['sunny', 'rainy', 'cloudy', 'not',

    'sunny'])