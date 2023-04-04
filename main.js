function menu(){
alert("Bienvenido a la tienda de juegos online")

let usuario = prompt("Ingrese su nombre de usuario:")
const passwordUsuario = 1234

let password = prompt("Ingrese su contraseña:")
for(let i=0 ; 1<=3; i++){
	if(password == passwordUsuario){
		alert("contraseña correcta")
		comprar()
		break
	}else{
		password=prompt("Contraseña incorrecta, vuelva a intentarlo:")
	}

}
}



class Producto{
	constructor(id, nombre, genero, precio){
		this.id=id 
		this.nombre=nombre	
		this.genero=genero
		this.precio=precio
	}
}

const p1 = new Producto(1,'Fifa 23', 'Deporte', 20000)
const p2=new Producto(2, 'The last of us', 'Accion', 25000)
const p3 =new Producto(3, 'Resident Evil 4', 'Terror', 29000)
const p4 =new Producto(4, 'Gran Turismo 7', 'Carreras', 22000)

const productos = [p1,p2,p3,p4]

let carrito =[]




function comprar(){
	let comprarJuego = parseInt(prompt("Ingrese una opcion: 0)Fifa 23  1)The last of us  2)Resident Evil 4  3)Gran Turismo 7  4)Volver al menú:"))
	console.log(comprarJuego)
	let juego= productos[comprarJuego]
	console.log(juego)
	let precio=0
	let cantidad=0

	switch(comprarJuego){
		 case 0:
		 	cantidad = cantidad + parseInt(prompt("Ingrese la cantidad que desea comprar:")) 
		 	precio=20000
		 	carrito.push({juego, cantidad, precio})
		 	console.log(carrito)

		 	let seguir1 = prompt("Ingrese 1) Si quiere seguir comprando 2)Si quiere ir al detalle de compra") 
		 	switch(seguir1){
		 	case "1":
                comprar()
                break
            case "2":
                alert("A continuacion tiene el detalle de su compra")
                calcularTotalCompra()
		 	}
		 	return


		 case 1:
		 	cantidad = cantidad + parseInt(prompt("Ingrese la cantidad que desea comprar:"))
		 	precio = 25000
		 	carrito.push({juego, cantidad, precio})
		 	console.log(carrito)

		 	let seguir2 = prompt("Ingrese 1) Si quiere seguir comprando 2)Si quiere ir al detalle de compra")
		 	switch(seguir2){
		 	case "1":
                comprar()
                break
            case "2":
                alert("A continuacion tiene el detalle de su compra")
                calcularTotalCompra()
		 	}
		 	return

		 case 2:
		 	cantidad = cantidad +parseInt(prompt("Ingrese la cantidad que desea comprar:"))
		 	precio = 29000
		 	carrito.push({juego, cantidad, precio})
		 	console.log(carrito)

		 	let seguir3 = prompt("Ingrese 1) Si quiere seguir comprando 2)Si quiere ir al detalle de compra")
		 	switch(seguir3){
		 	case "1":
                comprar()
                break
            case "2":
                alert("A continuacion tiene el detalle de su compra")
                calcularTotalCompra()
		 	}
		 	return

		 case 3:
		 	cantidad = cantidad + parseInt(prompt("Ingrese la cantidad que desea comprar:"))
		 	precio = 22000
		 	carrito.push({juego, cantidad, precio})
		 	console.log(carrito)

		 	let seguir4 = prompt("Ingrese 1) Si quiere seguir comprando 2)Si quiere ir al detalle de compra")
		 	switch(seguir4){
		 	case "1":
                comprar()
                break
            case "2":
                alert("A continuacion tiene el detalle de su compra")
                calcularTotalCompra()
		 	}
		 	return

		 case 4:
		 	menu()

		 default:
		 	alert("Elija una opcion correcta")
		 	comprar()


            } 
                
            
	}







function calcularTotalCompra(){

carrito.forEach((carritoFinal) => {console.log(` producto: ${carritoFinal.juego}, cantidad: ${carritoFinal.cantidad}, precio: ${carritoFinal.precio} `) })


const total= carrito.reduce((acumulador, elementos) => acumulador + elementos.precio * elementos.cantidad, 0)
alert(`El total a pagar es: ${total}`)


const salida = prompt("Ingrese 1)Para volver al menu principal  2)Para salir")
if(salida== 1){
	menu()

}else if(salida==2){
	salir()
}



} 
 
 function salir(){
 	alert("Gracias por su compra")
 }


 menu()


  

  