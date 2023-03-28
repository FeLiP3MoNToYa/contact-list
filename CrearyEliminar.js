let Contacto1 = {
    Id: 001,
    Nombre: 'Antonia',
    Apellidos: 'Restrepo',
    Telefono: '3105789426',
    ubicaciones: {
        Cuidad: 'Barranquilla',
        dirreccion: 'Cll 56 # 9A - 27',
    }
}
let Contacto2 = {
    Id: 002,
    Nombre: 'Raquel',
    Apellidos: 'Uribe',
    Telefono: '3201459875',
    Ubicaciones: {
        Cuidad: 'Cali',
        Dirreccion: 'Cll 56 # 78 - 11 Int 78',
    }
}
let Contacto3 = {
    Id: 003,
    Nombre: 'Andres',
    Apellidos: 'Tamayo',
    Telefono: '3745213685',
    Ubicaciones: {
        Cuidad: 'Medellin',
        Dirreccion: 'Cll 10 # 45 - 13',
    }
}

let ListaContactos = [Contacto1,Contacto2,Contacto3];


function Agregar(Id,Nombre,Apellidos,Telefono,Cuidad,Direccion){
    let contacto ={
        Id,
        Nombre,
        Apellidos,
        Telefono,
        Ubicaciones: {
            Cuidad,
            Dirreccion,
        }
    }
    ListaContactos.push(contacto);
}
function borrarContactoID(id){
    for(let i = 0; i < ListaContactos.length;i++){
        if (ListaContactos[i].id === id) {
            ListaContactos.splice(i,1);
        }
    }
}