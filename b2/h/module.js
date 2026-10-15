// b1
export const sumArray = arr => arr.reduce((b,c)=>b+c,0)

// b2
export const countOcc = (arr,val) => arr.filter(v=>v==val).length 

// b3
export const removeDuplicates = arr => [...new Set(arr)]

// b4
export const flattenArray = arr => {
    let buffer = []
    for (let i = 0; i < arr.length; i++) {
        buffer = [...buffer, ...arr[i]]
    }
    return buffer
}

// b5
export const isSymmetric = arr => arr.reverse() ? "true" : "false"

// b6
export const findSecondLargest = arr => Math.max(...arr.filter(v => Math.max(...arr) != v))

// b7
export const sortProductByPrice = products => products.sort((a,b)=>a.price-b.price)

// b8
export const findMostExpensiveProduct = products => products.reduce((max, c) => (c.price > max.price ? c : max))

// b9

// b10
export const isSubset = (arr1, arr2) => {
    const set1 = new Set(arr1);
    return arr2.every(item=>set1.has(item))
}

// b11
export const findMaxKey = obj => {
    let buffer = 0
    for (const i in obj) {
        if (obj[i] > buffer) {
            buffer = obj[i]
        }
    }
    return buffer
}

// b12
export function mergeObjectsSumValues(obj1,obj2) {
    const result = {...obj1}
    for (const [key, value] of Object.entries(obj2)) {
        result[key] = (result[key] || 0) + value;
    }
  return result;
}

// b13
export const countElements = arr => {
    const result = {};
    for (const item of arr) {
        result[item] = (result[item] || 0) + 1;
    }    return result;
}

// b14
export const cleanObject = obj => {
    const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }

  return result;
}

// b15
export const hasDuplicate = arr => [...new Set(arr)].length != arr.length

// b17
export const uniqueValues = (arr1,arr2) => [...new Set([...arr1, ...arr2])]

// b19
export const findLongestString = arr => arr.reduce((r,c) => c.length>r.length?c:r, "")

// 20
export const intersection = (arr1,arr2) => {
    const set2 = new Set(arr2);
    return [...new Set(arr1.filter(item=>set2.has(item)))];
}

// 21
export const filterByMinValue = (arr, minval) => arr.filter(v=>v>minval);

// 22
export const findLongestValue = obj => Object.values(obj).reduce((result, c) => typeof c === 'string' && c.length > result.length ? c : result, "");

// 23
export const groupByFirstLetter = arr => Object.groupBy(arr, str => str[0].toLowerCase());

// 24
export const getAdults = peopleArr => peopleArr.filter(v => v.age>=18);

// 25
export const convertToArray = obj => Object.entries(obj)

// 26
export const sortStringsByLength = arr => arr.sort((a,b) => a.length - b.length)

// 27


// 28
export const countWords = str => str.split(" ").length

// 29
export const findMinKey = (obj) => Object.keys(obj).reduce((minKey, key) => obj[key] < obj[minKey] ? key : minKey);