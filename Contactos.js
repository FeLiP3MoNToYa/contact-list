let Lista = ['Julio Gutierres', 'Luis Perez', 'Jhon Otalvaro'];
function Agregar(Nombre){
    Lista.push(Nombre);
}
function Eliminar(Nombre){
    let indiceNombre = Lista.indexOf(Nombre);
        Lista.splice(indiceNombre, 1);
}
function Mostrar(){
    Lista.sort();
    for (const contacto of Lista) {
        console.log(contacto);
    }
}