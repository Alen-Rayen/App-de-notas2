const funciones = require('./funcionesDeTareas') //traemos funcionesDeTareasa app.js

let process = require("process") // requiero el modulo process para modificar desde la consola

const accion = process.argv[2] // a partir del process vamos a agregar notas al archivo json 

switch (accion){
    case "listar":
        let tareas = funciones.leerJSON(); //llista de tareas

        if (tareas.length == 0){
            console.log("La lista de tareas esta vacia")
        } else {
            console.log("--------------------------")
            console.log("LISTA DE TAREAS")
            console.log("--------------------------")

           /*  for (let i = 0; i < tareas.length; i++){
                 console.log(`Titulo: ${tareas[i].titulo} // ${tareas[i].estado}`)
            } */
            tareas.forEach(tarea => {
                console.log(`Titulo: ${tarea.titulo} // ${tarea.estado}`)
            });
        }
    break;
    case "crear":
        let titulo = process.argv[3];
        let estado = process.argv[4];

        if (titulo && estado){
            funciones.guardarTarea(titulo, estado);
            console.log("Una nueva tarea ha sio agregada")
        } else {
            console.log("Es necesario que pases un titulo y un estado para crear una nueva tarea")
        }
    break;
    case "filtrar":
        let filtro = process.argv[3];

        let tareasFiltradas = funciones.filtrarPorEstado(filtro); // lass tareas filtradas

        if (filtro && tareasFiltradas.length != 0){
            console.log("--------------------------");
            console.log(`LISTA DE TAREAS FILTRADAS POR: ${filtro}`);
            console.log("--------------------------");

            tareasFiltradas.forEach(tarea => {
                console.log(`Titulo: ${tarea.titulo} // ${tarea.estado}`);
            })
        } else if (filtro && tareasFiltradas.length == 0) {
            console.log("No existen tareas con ese estado")
        } else {
            console.log("Debes ingresar un estado para filtrar");
        }
    break;
}