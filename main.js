//구조 분해 할당 (Destructuring assignment)
//비구조화 할당

const user ={
  name: 'Heropy',
  age: 85,
  email: 'dldudsh123@gmail.com',
  address: 'USA'
}
const{name: heropy, age, email, address ='Korea'} = user
//E.g, user.address

console.log(`사용자의 이름은 ${heropy}입니다.`)//사용자의 이름은 Heropy입니다. 다른 이름으로 지정 사용 가능
console.log(`${name}의 나이는 ${age}세 입니다.`)//의 나이는 85세 입니다.*heropy로 변수 이름을 지정 하였기에 name 사용 불가
console.log(`${name}의 이메일은 ${user.email}입니다.`)//Heropy의 이메일은 dldudsh123@gmail.com입니다.
console.log(address)//USA _address의 값이 비어 있으면 Korea를 반환

const fruits = ['Apple', 'Banana', 'Cherry']
const [a,b,c,d] = fruits//배열의 구조분해 또한 가능
console.log(a,b,c,d)//Apple Banana Cherry undefined