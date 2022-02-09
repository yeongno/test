const userAge ={
  //Key: value
  name: 'Heropy',
  age: 85
}
const userEmail ={
  name: 'Heropy',
  email: 'dldudsh123@gmail.com'
}

// const target = Object.assign(userAge, userEmail)
// console.log(target)//{name: 'Heropy', age: 85, email: 'dldudsh123@gmail.com'}
// console.log(userAge)//{name: 'Heropy', age: 85, email: 'dldudsh123@gmail.com'}
// console.log(target === userAge)//true 메모리의 같은 곳을 참조 하고 있음

const a = { k: 123}
const b = { k: 123}
console.log(a === b )//false_생긴건 같지만 메모리 참조가 다르다.

const target1 = Object.assign({}, userAge, userEmail)
console.log(target1)//{name: 'Heropy', age: 85, email: 'dldudsh123@gmail.com'}
console.log(userAge)//{name: 'Heropy', age: 85}
console.log(target1 === userAge)//false _ 새로운 객체를 만들어 원본 손상 없이 사용 가능
const target2 = Object.assign({}, userAge)//새로운 객체로 복사 가능

const user ={
  name: 'Heropy',
  age: 85,
  email: 'dldudsh123@gmail.com'
}

const keys = Object.keys(user)
console.log(keys)

console.log(user['email'])

const values = keys.map(key => user[key])
console.log(values)