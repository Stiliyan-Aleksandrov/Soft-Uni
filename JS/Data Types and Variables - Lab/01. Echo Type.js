function solve(param) {
    let type = typeof param;
    console.log(type);
    if (type == `number` || type == `string`) {
        console.log(param);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}
solve ('Hello, JavaScript!')