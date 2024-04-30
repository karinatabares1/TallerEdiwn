function greetUser(name) {
	if (name.length < 2) {
		console.log("el nombre no puede tener menos de dos letras")
        return false;
    } else if (name.charAt(0) !== name.charAt(0).toUpperCase()) {
		console.log("el nombre debe tener la primera letra en mayuscula");
        return false;
    }else if (!/^[a-zA-Z]+$/.test(name)) {
		console.log("el nombre no debe llevar ni numeros ni caracteres especiales");
        return false;
    }
	console.log("¡Hola, " + name + ",! Bienvenido a mi programa.")
    return true;
}
greetUser("Edwin")
