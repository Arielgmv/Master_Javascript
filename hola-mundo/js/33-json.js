'use script'
//JSON - Javascript Object Notation
var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
}

var pelicula1 = {
    titulo: 'Lord of the Rings',
    year: '2003',
    pais: 'New Zeland'
}

pelicula.year = 2020;

var peliculas = [
    {titulo: "La verdad duele", year: 2016, pais: "Francia"},
    pelicula,
    pelicula1
]

console.log(pelicula);
console.log(peliculas);
var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    caja_peliculas.append(p);
}
