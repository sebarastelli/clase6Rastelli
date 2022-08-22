let cantidadEntradas;
let peliculaSeleccionada;
let precio;
let dinero;
let seleccion = false;
let pelicula = ["Fight Club","Seven","Gone Girl"];


function cartelera() {
    alert("El cine esta haciendo una función especial del director David Fincher, las películas en cartelera son: Fight Club, Seven y Gone Girl. El valor de la entrada es de $120 para cada una de las funciones");
    peliculaSeleccionada = prompt("Para elegír que pelicula ver escribir A para Fight Club, B para Seven y C para Gone Girl");
    if (peliculaSeleccionada == "a" || peliculaSeleccionada == "A"){
        alert("Elegiste la película Fight Club");
        pelicula = pelicula[0];
        seleccion = true;
    }
    else if (peliculaSeleccionada == "b" || peliculaSeleccionada == "B"){
        alert("Elegiste la película Seven");
        pelicula = pelicula[1];
        seleccion = true;
    }
    else if (peliculaSeleccionada == "c" || peliculaSeleccionada == "C"){
        alert("Elegiste la película Gone Girl");
        pelicula = pelicula[2];
        seleccion = true;
    }
    else{
        alert("El dato que ingresaste es incorrecto");
    }
}
function pago() {
    cantidadEntradas = prompt("Cuantas entradas necesitas");
    precio = cantidadEntradas*120;
    dinero = prompt("Con que cantidad de dinero vas a abonar");
    if (dinero == precio) {
        alert("Disfrute la película " + pelicula);
        seleccion = false;
    }
    else if (dinero > precio){
        alert("Su vuelto es: $" + (dinero - precio) + ", disfrute la película " + pelicula);
        seleccion = false;
    }
    else{
        alert("No te alcanza");
    }
}

function sugerencia() {
    let recomendacion = prompt("Gracias por su cumpra, si tiene alguna sugerencia de una película de cualquiero director para agregaren cartelera escribala a continuación");
    pelicula = ["Fight Club","Seven","Gone Girl"];
    pelicula.push(recomendacion)
    let listaDePeliculas = pelicula.join(" - ")
    alert("Ahora la cartelera es: " + listaDePeliculas)
}

cartelera()
while(seleccion == true){
    pago()
    sugerencia()
}

