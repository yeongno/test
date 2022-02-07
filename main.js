// // 산술 연산자(atrithmetic operator)

// console.log(1+2)
// console.log(5-7)
// console.log(3*4)
// console.log(10/2)
// console.log(7%5)

// //할당 연산자(assignment operator)

// let a = 2
// // a = a + 1
// a +=1
// console.log(a)

// //비교 연산자(Comparison operator)

// const a =1
// const b = 3

// console.log(a==b)

// function isEqual(x,y){
//   return x === y
// }

// console.log(isEqual(1,1))
// console.log(isEqual(2,'2'))
// console.log(a!=b)
// console.log(a<b)
// console.log(a>=b)

//논리 연산자(logical operator)
const a = 1===1
const b = 'AB' === 'AB'
const c = true

console.log(a)
console.log(b)
console.log(c)

console.log('&&: ', a && b && c) //  하나라도 false면 false반환
console.log('||',a||b||c) //하나라도 true 이면 true 반환
console.log('!:',!a) //부정 연산자