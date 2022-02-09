//JS 데이터

//String: "", '', ``
//Number
//Boolean: true, false
//undefined
//null
//Array: []
//Object: {}

//String.prototype.indexOf()
const result = 'Hello world'.indexOf('world')//6반환
console.log(result)
const str1 ='Hello world!'
console.log(str1.indexOf('world'))//6반환
console.log(str1.indexOf('Heropy') !== -1 )//논리 연산자 false 반환
console.log(str1.slice(0,3))//Hel 반환 *직전까지만 반환
console.log(str1.replace('world','HEROPY'))//Hello HEROPY 반환
const email = 'dldudsh123@naver.com'
console.log(email.match(/.+(?=@)/))
//['dldudsh123', index: 0, input: 'dldudsh123@naver.com', groups: undefined]
console.log(email.match(/.+(?=@)/)[0])//dldudsh123만 반환
//@를 기준으로 정규표현식을 사용 하여 값 반환
const str2 = '  Hello world  '
console.log(str2.trim())//Hello world 앞뒤의 공백 문자 생략하여 반환

const str ='0123'
console.log(str.length)//4반환
console.log('01234'.length)//5반환


