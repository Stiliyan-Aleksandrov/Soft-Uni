function solve(weekdays) {
    if (weekdays > 7 || weekdays < 0) {
        console.log(`"Invalid day!".`);
    } else {
        let days = [
            `Monday`,
            `Tuesdayt`,
            `Wednesday`,
            `Thursday`,
            `Friday`,
            `Saturday`,
            `Sunday`
        ];
        console.log(days[weekdays - 1]);
    }
} solve(11)