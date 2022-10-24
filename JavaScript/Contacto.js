var inputs = document.getElementsByClassName(`formulario-input`)
for (var i =0; i <inputs.length; i++) {
    inputs[i].addEventListener(`keyup`, function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add(`fijar`);
        }  else {this.nextElementSibling.classList.remove(`fijar`)}
    })
}
function validar () {
    var Nombre, Apellido, Correo, Desde, Expresion;
    Nombre = document.getElementById ("Nombre").value
    Apellido = document.getElementById ("Apellido").value
    Correo = document.getElementById ("Correo").value
    Desde = document.getElementById ("Desde").value
    Mensaje = document.getElementById ("Mensaje").value
    Expresion = /\w+@\w+\.+[a-z]/
    
    if(Nombre === "" || Apellido === "" || Correo === "" || Desde ==="" || Mensaje === "" ){
        alert("Para Contactarnos todos los campos son Obligatorios");
        return false;

    }

    else if(!Expresion.test(Correo)){
        alert("La direccion de Correo no es valida");
        return false;
    }

    else if(Mensaje.length>201){
        alert("El mensaje no puede contener mas de 200 caracteres");
        return false;
    }
}

