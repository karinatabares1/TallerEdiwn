function isPrimeNumber(number) {
    if (number <=1 ) 
    return false;
 for (let i = 2; i < number; i++) {
    
    if (number % i === 0)
    return false; 
        
    }
    return true;
}

console.log(isPrimeNumber(11));
console.log(isPrimeNumber(15));