// Câu 9, k typescript

// c1
export const productInfo = (name, price) => `Sản phẩm: ${String(name)}, Giá: ${Number(price).toLocaleString("vi-VN")} VND`

// c2
export const greet = name => `Xin chào, ${name}`

// c3
export function sumUpTo(number) {
    let total = 0;
    for (let i = 1; i <= number; i++) {
        total = total + i
    }
    return total
}

// c4
export const square = (x,y) => x*y

// c5
export const isEven = num => num % 2 == 0 ? "true" : "false"

// c6
export const firstElement = array => array[0]

// c7
export const sumRest = (...numbers) => numbers.reduce((buffer, current) => buffer + current, 0)

// c8
export const splitObj = obj => `Name: ${obj.name}, Age: ${obj.age}`

// c10
export const strLen = str => String(str).length

// c11
export const uppCase = str => String(str).toUpperCase()

// c12
export const formatCurrency = price => Number(price).toLocaleString("vi-VN") + " VND"

// c13
export const maxwell = arr => Math.max(...arr)

// c14
export function isPrime(number) {
    if (number <= 1) return;
    // ...
}

// 15
export function repeatString(string, count) {
    let def = "";
    for (let i = 0; i < count; i++) {
        def = def + string + " "
    }
    return def
}

// 16
export function sumOdd(arr) {
    let processedArr = arr.filter((val) => val % 2 != 0);
    return processedArr.reduce((buff, curr) => buff + curr, 0)
}

// 17
export const sumGreaterThan = (arr, value) => {
    const processed = arr.filter((n) => n > value)
    return processed.reduce((b, c) => b + c, 0)
}

// 18
export const formatDate = datestring => datestring.split("-").reverse().join("/")

// 19
export const firstThree = arr => arr.slice(0,3)

// 20
export const containsChar = (s,find) => String(s).includes(find)

// 21
export const mergeArr = (a1,a2) => a1.concat(a2)

// 22 
export const countOccurences = (arr, count) => arr.filter((v) => v === count).length

// 23
export const filterOdd = arr => arr.filter((v)=>v%2!=0)

// 24
export const greaterThan = (arr,v) => arr.filter((val)=>val>v)

// 25
export function factorial(num) {
    let total = 1
    for (let i = 1; i <= num; i++) {
        total = total * i
    }
    return total
}

// 26
export function sepEvenOdd(arr) {
    const even = arr.filter((v)=>v%2==0)
    const odd = arr.filter((v)=>v%2!=0)
    return `Even: ${even} | Odd: ${odd}`
}

// 27
export const sortAsc = arr => arr.sort()

// 28
export const sumEvenIndex = arr => arr.filter((v)=>v%2==0).reduce((b,c,i)=>i%2===0?c+b:c,0)

// 29
export const multiplybyTwo = arr => arr.map((v)=>v*2)

// 30
export const arraytoString = arr => arr.join("")