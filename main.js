const pi = 3.141592
console.log(pi)

const str = pi.toFixed(2)
console.log(str)
console.log(typeof str)

//전역 함수를 사용하여 위의 문자 데이터를 숫자 데이터로 바꾸기
const integer = parseInt(str)
const float = parseFloat(str)
console.log(integer)//3 반환
console.log(float)//3.14 반환
console.log(typeof integer, typeof float)