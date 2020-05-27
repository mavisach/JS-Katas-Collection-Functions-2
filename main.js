// let x = 6
// let y = 7
function add(x, y) {
    return x + y
}
console.log(add(6, 7));

// let n = 6
// let m = 7
function multiply(n, m) {
    // return n + n + n + n + n + n + n
    let total = 0
    for (let index = 0; index < m; index++) {
        // total += n
        // total = total + n
        total = add(total, n)

    }
    return total
}
console.log(multiply(6, 7));


function power(f, h) {
    let total = 1
    for (let index = 0; index < h; index++) {
        total = multiply(total, f)

    }
    return total
}
console.log(power(3, 5));


function factorial(a) {
    let number = 1
    for (let index = 1; index <= a; index++) {
        number = multiply(number, index)

    }
    return number
}
console.log(factorial(4));


// const array = [2, 0, 5, 12, 20, 25, 36, 37]
function fibonacci(x) {
    let index = 1
    for (let index = 0; index < x; index++) {
        index = add(index)

    }
    return index
}
console.log(fibonacci(6));




