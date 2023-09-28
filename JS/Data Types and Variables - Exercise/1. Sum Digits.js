function solve(num) {
    let numToString=String(num);
    let input=numToString[0];
    sum=0;
    for(let i=0;i<numToString.length;i++){
        sum+=Number(numToString[i])
    }
    console.log(sum);
}
solve(245678)