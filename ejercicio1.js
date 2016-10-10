/*Ejercicio 1: <br>Haz el juego de piedra papel o tijera con 3 turnos

***PSEUDOCODIGO****
1.-Pedir sl usuario si desea jugar
2.-Si jugar es si.
3.-Leer jugar
4.-Pedirle que eliga ELIGE: PIEDRA(1), PAPEL(2), TIJERA(3)
5.-guardar valor
6.-Pedirle nombre
7.-Guardar nombre
8.-Si mi respuesta 1 es igual a respuesta2 entonces sera empate
9.-Pero si mi respuesta1 igual a piedra ganará e imprimira el nombre del jugador ,de lo contrario ganara respuesta2
10.Pero si mi respuesta1 igual a papel ganará  e imprimira el nombre del jugador  ,de lo contrario ganara respuesta2
11.-Pero si mi respuesta1 igual a tijeras ganará e  imprimira el nombre del jugador  ,de lo contrario ganara respuesta2

*/
    var jugar = prompt("QUIERES EMPEZAR A JUGAR SI/NO?", "SOLO MAYUSCULAS");
	if(jugar === "SI"){
		var respuesta1 = prompt("ELIGE UNA OPCION: PIEDRA(1), PAPEL(2), TIJERA(3), ");
		var nombre1 = prompt("DIME TU NOMBRE: "); 
		var respuesta2 = prompt("ELIGE UNA OPCION: PIEDRA(1), PAPEL(2), TIJERA(3), ");
		var nombre2 = prompt("DIME TU NOMBRE: "); 
		for(var i = 0; i < 3; i++) {
			if(respuesta1 === respuesta2) {
			   alert("!EMPATARON!" + nombre1 + " " + nombre2);
			}
			if(respuesta1 === 1 && respuesta1 !== 2 || respuesta1 !== 3 ) {
				alert("!GANASTE!" + " " +  nombre1);
			}else{
				alert("!GANASTE!" + " " +  nombre2);
			}
			if(respuesta1 === 2 && respuesta1 !== 1 || respuesta1 !== 3 ) {
				alert("!GANASTE!" + " " + nombre1);
			}else{
				alert("!GANASTE!" + " " + nombre2);
			}
			if(respuesta1 === 3 && respuesta1 !== 1 || respuesta1 !== 2 ) {
				alert("!GANASTE!" + " " +  nombre1);
			}else{
				alert("!GANASTE!" + " " +  nombre2);
			}
		};
	}else if( jugar === "NO"){
		alert("!VUELVE PRONTO!");
	}

