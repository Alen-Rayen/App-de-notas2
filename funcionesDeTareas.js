const fs = require("fs") // requiere los modulos "fs"

function leerJSON() {
    return JSON.parse(fs.readFileSync('./tareas.json', 'utf-8')) // leer el archivo json y lo retorna 
}

function escribirJSON(info) {  //funcion que permite manipular json 
    fs.writeFileSync('./tares.json', JSON.stringify(info), 'utf-8') // stringify pasa un dato a json 
}

function guardarTarea(titulo, estado) {
    let tareasAnteriores = leerJSON() // guarda la nueva nota en el json 

    let nuevaTarea = {
        titulo: titulo,
        estado: estado
    }

    tareasAnteriores.push(nuevaTarea); //con el metodo push insertamos en la variable tareasAnteriores la nueva tarea creada

    escribirJSON(tareasAnteriores); //mediante el metodo escrbirJSON reescribimos el archivo json
}

function filtrarPorEstado(estado){
    let tareas = leerJSON(); //listar tareas

    /* let tareasFiltradas = [];

    for (let i = 0; i < tareas.length; i++){
        if (tareas[i].estado == estado){
            console.log(tareas[i]);
        }
    } */

    return tareas.filter(tareas => tareas.estado == estado) //metodo filter al array de tareas declarando la condicion tarea.estado es igual al estado que pase por parametro se devuelva esa tarea
}

module.exports = { leerJSON, escribirJSON, guardarTarea }
