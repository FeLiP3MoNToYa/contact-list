let Lista = ['Julio Gutierres', 'Luis Perez', 'Jhon Otalvaro'];
function Agregar(Nombre){
    lista.push(Nombre);
}
function Eliminar(Nombre){
    let indiceNombre = Lista.indexOf(Nombre);
    lista.splice(indiceNombre, 1);
}