function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        return console.log("El año "+year+ " es bisiesto");
    }else{
        return console.log("El año "+year+ " no es bisiesto");
    }
}
leapYear("2023")