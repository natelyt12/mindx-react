import {
  cleanObject,
  convertToArray,
  countElements,
  countOcc,
  countWords,
  filterByMinValue,
  findLongestString,
  findLongestValue,
  findMaxKey,
  findMinKey,
  findMostExpensiveProduct,
  findSecondLargest,
  flattenArray,
  getAdults,
  groupByFirstLetter,
  hasDuplicate,
  intersection,
  isSubset,
  isSymmetric,
  mergeObjectsSumValues,
  removeDuplicates,
  sortProductByPrice,
  sortStringsByLength,
  sumArray,
  uniqueValues,
} from "./module.js";

const array1 = [1, 2, 3, 4];
console.log(sumArray(array1));

const array2 = [1, 2, 2, 3, 2];
console.log(countOcc(array2, 2));

const array3 = [1, 2, 2, 3, 4, 4, 6, 2, 3, 6];
console.log(removeDuplicates(array3));

const array4 = [
  [1, 2],
  [3, 4],
];
console.log(flattenArray(array4));

const array5 = [1, 2, 3, 2, 1];
console.log(isSymmetric(array5));

const array6 = [3, 1, 4, 2, 4];
console.log(findSecondLargest(array6));

const products = [
  { name: "Product A", price: 30 },
  { name: "Product B", price: 20 },
  { name: "Product C", price: 50 },
];
console.log(sortProductByPrice(products));
console.log(findMostExpensiveProduct(products));

const array7 = [
  { type: "fruit", name: "apple" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "banana" },
];

const array8 = [1, 2, 3, 4];
const array9 = [2, 4];
console.log(isSubset(array8, array9));

const obj = { a: 10, b: 20, c: 15 };
console.log(findMaxKey(obj));

const obj1 = { a: 10, b: 20 };
const obj2 = { b: 30, c: 40 };
console.log(mergeObjectsSumValues(obj1, obj2));

const array10 = ["a", "b", "a", "c", "b", "a"];
console.log(countElements(array10));

const obj3 = { a: 1, b: null, c: undefined, d: 4 };
console.log(cleanObject(obj3));

const array11 = [1, 2, 3, 4, 2];
console.log(hasDuplicate(array11));

const array12 = [1, 2, 3];
const array13 = [3, 4, 5];
console.log(uniqueValues(array12, array13));

const array15 = ["abc", "abcd", "a"];
console.log(findLongestString(array15));

const array16 = [2, 3, 4];
console.log(intersection(array12, array16));

const array17 = [5, 10, 15, 20];
console.log(filterByMinValue(array17, 12));

const obj4 = { a: "cat", b: "elephant", c: "dog" };
console.log(findLongestValue(obj4));

const array18 = ["apple", "banana", "avocado", "blueberry"];
console.log(groupByFirstLetter(array18));

const people = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 16 },
  { name: "David", age: 22 },
];
console.log(getAdults(people));

const obj5 = { a: 1, b: 2, c: 3 };
console.log(convertToArray(obj5));

const array19 = ["a", "ccc", "bb"];
console.log(sortStringsByLength(array19));

const string = "Hello world! Welcome to JavaScript";
console.log(countWords(string));

const obj6 = { a: 100, b: 20, c: 50 };
console.log(findMinKey(obj6));
