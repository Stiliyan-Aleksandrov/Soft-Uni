function solve(index) {
    let days = [
        `Monday`,
        `Tuesdayt`,
        `Wednesday`,
        `Thursday`,
        `Friday`,
        `Saturday`,
        `Sunday`
    ];
    let result=(days[index-1]);
    if(result!=undefined){
        console.log(result);
    }else console.log(`Invalid day!`);
}
solve(5)