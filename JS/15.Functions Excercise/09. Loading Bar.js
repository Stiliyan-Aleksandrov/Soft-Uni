function visualizeLoadingBar(num) {
    if (num === 100) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    } else {
        const percent = num + "%";
        const bars = "[" + "%".repeat(num / 10) + ".".repeat(10 - num / 10) + "]";
        console.log(percent, bars, "Still loading...");
    }
} loadingBar([30])