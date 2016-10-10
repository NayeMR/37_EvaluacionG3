/*Declara un arreglo vacío denominado nombres. Pide al usuario tres nombres y almacena esos nombres como elementos arreglo. 
A continuación muestra el contenido en un mensaje.

***PSEUDOCODIGO***
	1.-Declrar el arreglo vacio, para ingresar los valores ahi.	
	2.-Lerra el primer nombre
	3.-Guardara
	4.-lo agregara en el array vacío en posicion cero
	5.-si i es menor a tres, seguira pidiendo el nombre hasta maximo 3
	6.-Imprimira el valor del arreglo nombres
*/
var nombres = [];

for(var i = 1; i<=3; i++){
	var nombresUsuario = prompt("Ingresa el nombre del usuario: ");
	var nombreNuevo = nombres.push(nombresUsuario);
}
alert("Los nombres de los usuario son: " + nombres);
