function divisionSubtractions(dividend, divider) {
    if (divider === 0) {
      return ("División por cero no permitida");
    }
    
    let quotient = 0;
    let residue = dividend;
    
    while (residue >= divider) {
        residue -= divider;
        quotient++;
    }
    
    return { quotient: quotient, residue: residue };
}

let result = divisionSubtractions(12, 5);
console.log(result.quotient + " y sobran " + result.residue);