
alert("Bienvenido a la tienda de bebidas")

let usuario = prompt("Ingrese su nombre de usuario:")
const passwordUsuario = 1234

let password = prompt("Ingrese su contraseña:")
for(let i=0 ; 1<=3; i++){
	if(password == passwordUsuario){
		alert("contraseña correcta")
		break
	}else{
		password=prompt("Contraseña incorrecta, vuelva a intentarlo:")
	}
}


let edadUsuario=prompt("Ingrese su edad:")
for(let i=0 ; 1<=3; i++){
	if(edadUsuario>=18){
		alert("Usted es mayor de edad, puede ingresar")
		break
	}else{
		alert("Usted es menor de edad, no puede ingresar")
	}
}

let bebida = prompt("Ingrese la bebida para saber el precio:(Pon exit para salir) ")
while(bebida != "exit"){
		switch(bebida){
		case "agua":
			alert("El valor del agua es $250")
			break
		case "levite":
			alert("El valor de la levite es $350 ")	
			break
		case "coca cola":
			alert("El valor de la coca cola es $450")
			break
		case "sprite":
			alert("El valor de la sprite es $450")
			break
		case "cerveza":
			alert("el valor de la cerveza es $600")
			break
		default:
			alert("Producto sin stock")
			break		
	}
	bebida = prompt("Ingrese la bebida para saber el precio:(Pon exit para salir) ")
}

let acumulador = 0;
let cantidadProductos=prompt("¿Cuantos productos desea comprar?")
	
	for(let i=1; i<=cantidadProductos; i++){
		let precio=parseInt(prompt("Ingrese el precio del producto N°"+i +" (Sin $)"));
		acumulador = acumulador + precio
	}
	alert("el valor de su compra es $"+acumulador +" sin descuento")

function calcularDescuento(total){
	let totalConDescuento = total * 0.9;
	alert("El total de la compra con el 10% de descuento incluido es $"+totalConDescuento)

}
calcularDescuento(acumulador)