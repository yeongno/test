//즉시실행함수
//IIFE, Immediately-Invoked Function Expression

const a = 7
function double(){
  console.log(a*2)
}
double(); 
//아래의 즉시실행함수를 실행 시키려면 세미콜론으로 해당 함수가 끝났다는 표시로 구분지어 줘야함.

(function (){
  console.log(a*2)
})();

(function (){
  console.log(a*2)
}())