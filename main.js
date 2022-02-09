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

console.log('abs: ', Math.abs(-12))//12
console.log('min: ', Math.min(2,8))//2
console.log('max: ', Math.max(2,8))//8
console.log('ceil: ', Math.ceil(3.14))//4 *올림 처리
console.log('floor: ', Math.floor(3.14))//3 *내림 처리
console.log('round: ', Math.round(3.14))//3 *반 올림
console.log('random: ', Math.random())//0.1383785~

