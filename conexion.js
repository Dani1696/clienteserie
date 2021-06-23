//RECETAS PARA CONECTARNOS CON UN API (un servidor)

// 1. url del servicio

let url="http://localhost/apiSura/framework-4.1.3/public/personajes";

// 2. armamos la petición

let peticion={

    method:"GET"

}

// 3. llamar al servidor

fetch(url,peticion)

 .then(function(respuesta){
     return(respuesta.json())
 })
 .then(function(datos){
    pintarHeroes(datos)
})

// funcion para pintar los recursos que trae el api

function pintarHeroes(datos){
    let fila=document.getElementById("fila");

    datos.map(function(personajes){

        let columna=document.createElement("div");
        columna.classList.add("col");

        let tarjeta=document.createElement("div");
        tarjeta.classList.add("card");
        tarjeta.classList.add("h-100");

        let imagen=document.createElement("img");
        imagen.classList.add("card-img-top");
        imagen.src=personajes.foto;

        let tarjetaCuerpo=document.createElement("div");
        tarjetaCuerpo.classList.add("card-body");
        
        let nombre=document.createElement("h3");
        nombre.classList.add("text-center");
        nombre.textContent=personajes.nombre;

        let descripcion=document.createElement("p");
        descripcion.classList.add("text-center");
        descripcion.textContent=personajes.descripcion;

        //PINTAR(definir hijos)
        tarjetaCuerpo.appendChild(nombre);
        tarjetaCuerpo.appendChild(descripcion);

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(tarjetaCuerpo);

        columna.appendChild(tarjeta);

        fila.appendChild(columna);




        


    });

}