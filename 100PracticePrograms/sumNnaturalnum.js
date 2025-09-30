function sumOfNaturalNumbers(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// Example usage:
let num = 10;
console.log("Sum is: " + sumOfNaturalNumbers(num));
