function countCharacters(chain) {
   
    let letter = 0;
    let number = 0;
    let spaces = 0;

   
    for (let i = 0; i < chain.length; i++) {
        let caracter = chain.charAt(i);
        
        if (/[a-zA-Z]/.test(caracter)) {
            letter++;
        } else if (/[0-9]/.test(caracter)) {
            number++;
        } else if (caracter === ' ') {
            spaces++;
        }
    }

    
    return {
        letter: letter,
        number: number,
        spaces: spaces
    };
}


let texto = "Hola 123 mundo";
let result = countCharacters(texto);
console.log("Cantidad de letters:", result.letter);
console.log("Cantidad de números:", result.number);
console.log("Cantidad de spaces:", result.spaces);