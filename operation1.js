function calculateOperation(number1, number2) {
    function add() {
        return (number1 + number2).toFixed(2);
    }

    function substract() {
        return (number1 - number2).toFixed(2);
    }

    function multiply() {
        return (number1 * number2).toFixed(2);
    }

    function split() {
        if (number2 === 0) {
            return "Error: No se puede dividir por cero";
        }
        return (number1 / number2).toFixed(2);
    }

    if (isNaN(number1) || isNaN(number2)) {
        console.log("POR FAVOR INGRESE UN NUMERO");
        return;
    }

    console.log("La suma es: " + add());
    console.log("La resta es: " + substract());
    console.log("La multiplicación es: " + multiply());
    console.log("La división es: " + split());
}

calculateOperation(2, 4);
