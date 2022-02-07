//호이스팅(Hoisting)
//함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7

// double()//위에서 아래로 읽혀지기 때문에 함수가 만들어기 전에 선언하면 에러

const double = function (){
  console.log(a*2)
}

double()

sum()

function sum(){
  console.log(a+1)
}