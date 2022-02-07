//함수 복습

function sum(x, y) {
  // console.log(x+y)
  return x + y
}
const a = sum(1, 3)
const b = sum(4, 12)

console.log(a)
console.log(b)
console.log(a + b)
console.log(sum(1, 3))
console.log(sum(1, 3) + sum(4, 5))//효율적이지 않음

sum(1, 3)//함수의 인수로 1,3을 넣으면 함수의 매개변수로 받아 처리

const ssum = function (x,y){
  console.log(x)
  return x+y
  console.log(x)// return에서 종료되기에 아래 값들은 실행되지 않음
}

console.log(ssum(1,3))

function sssum(){
  console.log(arguments)
  return arguments[0] + arguments[1]
}

console.log(sssum(7,3))