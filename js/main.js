let entrada = 'Encuestas de Futbol, Especial Mundial de Futbol';

    alert( entrada );

    console.log(entrada);

let nacionalidad = prompt("Por Favor Ingresa de que pais eres: ");
let nombre = prompt("Por favor Ingresa tu Nombre: ");
    console.log(nacionalidad);
    console.log(nombre);
    alert("Bienvenido " + nombre + "\n" + "Ayudanos a elegir a los mejores del mundo" + "\n" + "A continuacion podras ingresar cuales son tus candidatos a ganar la copa del mundo");

const equiposFutbolMundo = [];
let cantidad = 5;

do{
    let ingreso = prompt("Ingrese Nombre del Club: ");
    equiposFutbolMundo.push(ingreso);
    console.log (equiposFutbolMundo);
}while(equiposFutbolMundo.length != cantidad);

const tusElegidos =equiposFutbolMundo.concat([]);
alert ("Tus Elegidos son: " + "\n" + tusElegidos.join("\n") + "\n" + "Gracias por tu tiempo" + " " + nombre);
