

class producto{
	constructor(id, imagen, nombre, precio){
		this.id = id
		this.nombre= nombre
		this.imagen = imagen	
		this.precio = precio
	}
}

const p1=new producto(1, "imagenes/fifa23.jpg" ,  "Fifa 23",20000)
const p2=new producto(2, "imagenes/nba.jpg",  "Nba 2k23",19000)
const p3=new producto(3, "imagenes/godofwar.webp",  "God of war Ragnarok",23000)
const p4=new producto(4, "imagenes/thelastofus.webp",  "The last of us II",25000)
const p5=new producto(5, "imagenes/residentevil.webp", "Resident evil 4",  24000)
const p6=new producto(6, "imagenes/untildawn.jpg", "Until dawn",14000)
const p7=new producto(7, "imagenes/dirt4.jpg", "Dirt 4",  15000)
const p8=new producto(8, "imagenes/granturismo.jpg", "Gran turismo 7",  17000)

let productos=[p1,p2,p3,p4,p5,p6,p7,p8]
	localStorage.setItem("productos",JSON.stringify(productos));
	
const carrito =  []


let cards=document.getElementById("cartas")

	for(const producto of productos){
		let carta = document.createElement("div")
		carta.className = "card  col-xs-12 ,col-sm-6, col-md-6, col-lg-2"
		carta.innerHTML =`	
 			<img class=" imageProductos card-img-top" src=${producto.imagen}  alt="...">
  			<div class="card-body">
    			<h5 class="card-title ">${producto.nombre}</h5>
    			<p class="card-text">$${producto.precio}</p>
    			<button id="btn${producto.id}" class="btn btn-primary aling-button"> Comprar </button>
  			</div>
		

		`
	cards.append(carta)
	}



	productos.forEach((producto)=>{
			document.getElementById((`btn${producto.id}`)).addEventListener("click", function(){
				agregarAlCarrito(producto)
			})

	})

function agregarAlCarrito(agregarProducto){
	carrito.push(agregarProducto)
	console.table(carrito)
		sessionStorage.setItem("carrito",JSON.stringify(carrito));
	
	document.getElementById("verCarrito").innerHTML += `
					
						<tr>
							<td>${agregarProducto.id}</td>
							<td>${agregarProducto.nombre}</td>
							<td>$${agregarProducto.precio}</td>
						</tr>
		
	`

	let totalCarrito = carrito.reduce((acumulador, elementos) => acumulador + elementos.precio, 0)
	console.log(totalCarrito)
	document.getElementById("totalAPagar").innerText = ` Total=$${totalCarrito} `



}

