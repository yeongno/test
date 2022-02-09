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
// (3) [{…}, {…}, {…}]
// 0: {id: 0, namd: 'Apple'}
// 1: {id: 1, namd: 'Banana'}
// 2: {id: 2, namd: 'Cherry'}
// length: 3
// [[Prototype]]: Array(0)

//.filter()
const d = numbers.map(number =>number <3)
console.log(d)
//(4) [true, true, false, false]
const e = numbers.filter(number =>number <3)
console.log(e)
//(2) [1, 2]
//*true면 값 반환하며 false이면 반환 안함.
console.log(numbers)//(4) [1, 2, 3, 4]_원본에 map, filter 손상없음

//.finde() .findeIndex()

const f = fruits.find(fruit=>/^B/.test(fruit))
console.log(f)//Banana
//대문자 B로 시작하는 아이템 반환

const g = fruits.findIndex(fruit=>/^B/.test(fruit))
console.log(g)//1 _찾은 아이템 번호

// .includes()
const h = numbers.includes(3)
console.log(h)//true
const i = fruits.includes('HEROPY')
console.log(i)//false

// .push() .unshift()
// 원본 수정됨 주의!
const numbers1= [1,2,3,4]
numbers1.push(5)
console.log(numbers1)//(5) [1, 2, 3, 4, 5]
numbers1.unshift(0)
console.log(numbers1)//(6) [0, 1, 2, 3, 4, 5]
// .reverse()
// 원본 수정됨 주의!
const numbers2= [1,2,3,4]
const fruits2 = ['Apple', 'Banana', 'Cherry']
numbers2.reverse()
fruits2.reverse()
console.log(numbers2)//(4) [4, 3, 2, 1]
console.log(fruits2)//['Cherry', 'Banana', 'Apple']

// .splice()
// 원본 수정됨 주의!
const numbers3= [1,2,3,4]
const fruits3 = ['Apple', 'Banana', 'Cherry']
numbers3.splice(2,1)
console.log(numbers3)//(3) [1, 2, 4]
numbers3.splice(2,0,999)
console.log(numbers3)//(4) [1, 2, 999, 3, 4]
fruits3.splice(2, 0, 'Orange')
console.log(fruits3)//(4) ['Apple', 'Banana', 'Orange', 'Cherry']