const numbers= [1,2,3,4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers[1])//2
console.log(fruits)//배열 출력
console.log(fruits[2])//Cherry
// .length 아이템의 갯수 확인
console.log(numbers.length)//4
console.log(fruits.length)//3
console.log([1,2].length)//2
console.log([].length)//0
// .concat()
console.log(numbers.concat(fruits))//[1,2,3,4,'Apple', 'Banana', 'Cherry']
console.log(numbers)//[1,2,3,4]
console.log(fruits)//['Apple', 'Banana', 'Cherry']
// .forEach() 배열데이터의 아이템 갯수 만큼 콜백함수의 인수로 사용됨
fruits.forEach(function(element, index, array){
  console.log(element, index, array)
})
// Apple 0 (3) ['Apple', 'Banana', 'Cherry']
// main.js:18 Banana 1 (3) ['Apple', 'Banana', 'Cherry']
// main.js:18 Cherry 2 (3) ['Apple', 'Banana', 'Cherry']


// .map()
const a = fruits.forEach(function (fruit, index){
  console.log(`${fruit}-${index}`)
})
console.log(a)//undefined

const b = fruits.map(function(fruit, index){
  return `${fruit}-${index}`
})
console.log(b)
//['Apple-0', 'Banana-1', 'Cherry-2']
const c = fruits.map(function(fruit, index){
  return {
    id: index,
    namd: fruit
  }
})
console.log(c)
