//데이터 불변성(Immutability)
//원시 데이터: String, Number, Boolean, undefined, null
//참조형 데이터: Object, Array, Function
//------------------------------------------------------------
//|1:         |2:         |3:         |4:
//------------------------------------------------------------

let a1 = 1
let b1 = 4
console.log(a1, b1, a1 === b1) //1 4 false_메모리 주소 다름
b1 = a1
console.log(a1, b1, a1 === b1) //1 1 true_메모리 주소 같음
a1 = 7
console.log(a1, b1, a1 === b1) //7 1 false_a는 다른 메모리 주소를 가리켜 주소 다름.
let c1 = 1
console.log(b1, c1, b1 === c1) //1 1 true_c는 새로운 메모리가 아닌 현재 1값이 있는 b와 같은 주소를 가르킴
//새로운 원시 데이터를 사용 했을 때 해당 데이터가 기존 메모리에 들어 있다면 그 주소를 가르킴 이것을 데이터의 불변성이라 한다.
//그렇기에 원시 데이터의 값이 다를 경우 다른 데이터라는 것이다.

let a = {
  k: 1
}
let b = {
  k: 1
}
console.log(a, b, a === b)
a.k = 7
b = a
console.log(a, b, a === b)
a.k = 2
console.log(a, b, a === b)
let c = b
console.log(a, b, c, a === c)