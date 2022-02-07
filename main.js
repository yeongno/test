// 형 변환(Type conversion)

//Truthy(참 같은 값)
//true, {}, [],1,2,'false', -12, '3.14' ...

//Flasy(거짓 같은 값)
//false, '', null, undefined, 0, -0, Nan(Not a number)

const a =1
const b ='1'

console.log(a===b)//일치 연산자로 형변환이 일어나지 않아 정확하게 false값이 나옴
console.log(a==b)
//동등 연산자로 형 변환이 일어나며 true로 출력이 된다.그렇기에 되도록이면 잘 안씀

if(1+ad){
  console.log(123)
}