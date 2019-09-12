'use strict'
//Fetch (ajax) y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var usuarios = [];
//Fetch hace peticiones asincronas a un servidor
//lo de abajo, es una promesa
fetch('https://reqres.in/api/users')
    //recibimos los datos y lo convertimos a json
    .then(data => data.json())
    /*es lo mismo que esto
    .then(function (data) => {
        return data.json()
    })
    */
    .then(users =>{
        usuarios = users.data;
        console.log(usuarios);

        usuarios.map((users, i) => {
            let nombre = document.createElement('h3');
            nombre.innerHTML = i + " " +users.first_name + " " + users.last_name;
            div_usuarios.appendChild(nombre);

            document.querySelector(".loading").style.display = 'none';
        })
    });