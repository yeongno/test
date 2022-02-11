import _ from 'lodash'

//|1:         |2:         |3:         |4:
//얕은 복사(Shallow copy), 깊은 복사(Deep copy)
const user ={
  name: 'Heropy',
  age:85,
  emails:['dldudsh123@gmail.com']
}
const copyUser = user
//const copyUser = Object.assign({}, user) //다른 메모리로 해당 객체 복사(얕은 복사)
//const copyUser ={...user}//전개 연산자로 복사가능 이 또한 다른 새로운 메모리로 복사(얕은 복사)
console.log(copyUser===user)//true_같은 메모리 주소

user.age =22
console.log('user',user)//user {name: 'Heropy', age: 22, emails: Array(1)}
console.log('copyUser',copyUser)//copyUser {name: 'Heropy', age: 22, emails: Array(1)}

console.log('-------')
console.log('-------')

const user1 ={
  name: 'Heropy',
  age:85,
  emails:['dldudsh123@gmail.com']
}
// const copyUser1 = {...user1}
const copyUser1 = _.cloneDee[(user)]
console.log(copyUser1===user1)//false
user1.age =22
user1.emails.push('neo@zillinks.com')
console.log(user1.emails===copyUser1.emails)//true
console.log('user1', user1)
console.log('copyUser1',copyUser1)