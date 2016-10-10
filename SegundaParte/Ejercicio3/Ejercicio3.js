/****PSEUDOCODIGO***
	1.-Pedir al usuario una palabra
	2.-Leer palabra
	3.-Convertirla a minusculas
	4.-Ir leyendo de una en una la cadena de caracteres
	5.-Si el valor primero es diferente  al valor dos, no sera palindromo
	6.-Sino sera palindromo
*/



var inputLetra = document.getElementById(letra);
var palabra = inputLetra;
//var valor = parseInt(letra.value);

function isPalindro(palabra){
	var frase = palabra.replace(/\s/g,"");
	for(var i = 1; i <= frase.length; i++) {
		var valor1 = frase[i].toLowerCase();
		var valor2 = frase[frase.length - (i+1)].toLowerCase();
		if(valor1 !== valor2) {
			alert("No es palindromo")
		}else{
			alert("Es palindromo" + valor2)
		}
	}
}
isPalindro(prompt("Ingresa la pabra" ));

//isPalindro("ANITA LAVA LA TINA");
//alert(isPalindro("ANITA LAVA LA TINA"));
