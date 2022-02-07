//ES6 Classes

const heropy = {
  name: 'Heropy',
  normal(){//normal:function()을 축약시킨 패턴이다.
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}

heropy.normal()
heropy.arrow()

// function User(first, last){
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`
// }

class User{
  constructor(first, last){
        this.firstName = first
        this.lastName = last
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

const heroppy = new User('Heropy', 'Park')
const amy = new User('Amy', 'Clarke')

console.log(heroppy)
console.log(amy.getFullName())