var ryzen3 = {
	 "Nombre": "Ryzen 3 3200g",
     "Precio":"140USD",
     "Nucleos":"4 nucleos",
     "RelojBase":"3.6Ghz",
     "id": 3
}; 

var ryzen5 = {
	"Nombre":"Ryzen 5 3400g",
	"Precio":"200USD",
	"Nucleos":"4 nucleos",
	"RelojBase":"3.7Ghz",
     "id": 5
};

var ryzen7 = {
  "Nombre":"Ryzen 7 3700x",
	"Precio":"550USD",
	"Nucleos":"8 nucleos",
	"RelojBase":"3.6Ghz",
    "id": 7
};

var procesadores = [ryzen3,ryzen5,ryzen7]
var codigo = Number(prompt("Digite el ID del producto"))

var existeProducto = procesadores.findIndex(procesador => procesador.id == codigo)

if(existeProducto >= 0)
{
alert("El procesador"+" "+procesadores[existeProducto].Nombre+" "+"Tiene un precio de "+procesadores[existeProducto].Precio+" "+"Cuenta con " +procesadores[existeProducto].Nucleos+" y un reloj base de "+procesadores[existeProducto].RelojBase)

}
else
{
alert("El producto con la id"+" "+codigo+" "+ "no existe,lo sentimos.")
}