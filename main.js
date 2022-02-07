// const heropy ={
//   firstName: 'Heropy',
//   lastName: 'Park',
//   getFullName: function(){
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(heropy.getFullName())

// const amy ={
//   firstName: 'Amy',
//   lastName: 'Clarke',
//   getFullName: function(){
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(amy.getFullName())

// const neo ={
//   firstName: 'Neo',
//   lastName: 'Smith',
//   getFullName: function(){
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(neo.getFullName())

function user(first, last){
  this.firstName = first
  this.lastName = last
  }
user.prototype.getFullName = function (){
  return `${this.firstName} ${this.lastName}`
}

  
const heropy = new user('Heropy', 'Park')
const amy = new user('Amy', 'Clarke')
//new키워드를 통해 생성자 함수로 실행한 결과를 반환해서 할당된 변수인 heropy와 amy는 인스턴스이다.

console.log(heropy.getFullName())
console.log(amy)
