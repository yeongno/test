//변수 유효범위(Variable Scope)
// var, let, const

function scope(){
  if(true){
    console.log(a)
    const a =123
  }
}
scope()