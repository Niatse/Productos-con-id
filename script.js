
var ryzen3 = {
	 "Nombre": "Ryzen 3 3200g",
     "Precio":"140USD",
     "Nucleos":"4",
     "RelojBase":"3.6Ghz",
     "id": 3
}; 

var ryzen5 = {
	"Nombre":"Ryzen 5 3400g",
	"Precio":"200USD",
	"Nucleos":"4",
	"RelojBase":"3.7Ghz",
     "id": 5
};

var ryzen7 = {
  "Nombre":"Ryzen 7 3700x",
	"Precio":"550USD",
	"Nucleos":"8",
	"RelojBase":"3.6Ghz",
    "id": 7
};

var procesadores = [ryzen3,ryzen5,ryzen7]
var codigo = Number(prompt("Digite el ID del producto"))

var existeProducto = procesadores.findIndex(procesador => procesador.id == codigo)

if(existeProducto == 0){
   alert("El procesador"+" "+ryzen3.Nombre+" "+"Tiene un precio de"+" "+ryzen3.Precio+" "+"Cuenta con"+" "+ryzen3.Nucleos+" "+"Nucleos"+" "+"Y un reloj base de:"+" "+ryzen3.RelojBase)

}

if (existeProducto == 1) {
	 alert("El procesador"+" "+ryzen5.Nombre+" "+"Tiene un precio de"+" "+ryzen5.Precio+" "+"Cuenta con"+" "+ryzen5.Nucleos+" "+"Nucleos"+" "+"Y un reloj base de:"+" "+ryzen5.RelojBase)
}

if (existeProducto == 2) {
	 alert("El procesador"+" "+ryzen7.Nombre+" "+"Tiene un precio de"+" "+ryzen7.Precio+" "+"Cuenta con"+" "+ryzen7.Nucleos+" "+"Nucleos"+" "+"Y un reloj base de:"+" "+ryzen7.RelojBase)
}
if (existeProducto == -1) {
	alert("El producto con la id"+" "+codigo+" "+ "no existe,lo sentimos.")
}





