
function factorialNumber(number) {
    if (number < 0) {
        return console.log("el factorial no esta definido para numeros negativos");
    }
   
    let factorial = 1;
     for (let i = number; i > 1; i--) {
       factorial*=i;
        
    }
    
    return factorial
}
console.log(factorialNumber(5));
