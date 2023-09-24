function solve(numPages, PagesPerHour, daysNeeded) {
let pagesTotal=(numPages/PagesPerHour)
let hourseNeeded=pagesTotal/daysNeeded
console.log(hourseNeeded);
}
solve(212, 20, 2)