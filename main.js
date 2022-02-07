//콜백(Callback)
//함수의 인수로 사용되는 함수

//setTimeout(함수, 시간)

function timeout(callback){
  setTimeout(()=>{
    console.log('Heropy!')
    callback()
  },3000)
}

timeout(()=>{
  console.log('Done!')
})