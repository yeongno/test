//전개 연산자 (Spread)

const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits)//(3) ['Apple', 'Banana', 'Cherry']
console.log(...fruits)//Apple Banana Cherry
//console.log('Apple','Banana','Cherry')

function toObject(a,b,c){
  return {
    a: a,
    b: b,
    c: c
  }
}
console.log(toObject(...fruits))//{a: 'Apple', b: 'Banana', c: 'Cherry'}
console.log(toObject(fruits[0],fruits[1],fruits[2]))//{a: 'Apple', b: 'Banana', c: 'Cherry'}
const fruits1 = ['Apple', 'Banana', 'Cherry', 'Orange']
function toObject1(a,b,...c){
  return {
    a: a,
    b: b,
    c//이처럼 속성의 이름과 데이터의 이름이 같으면 축약형으로 만들 수 있다.
  }
}
console.log(toObject1(...fruits1))//{a: 'Apple', b: 'Banana', c: Array(2)}
//...c처럼 매개변수 또한 전개 연산자를 사용 가능 하며 이를 Rest Parameter라고 한다.