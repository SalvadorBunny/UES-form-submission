personas = [];

//validaciones, etc
function validar() {
    //var retorno_nombre = validar_nombre();
    //var retorno_apellido = validar_apellido();
    //var retorno_lenguajes = validar_lenguajes();
    var retorno_correo = validar_correo();
    var retorno_numero = validar_telefono();
    var retorno_url = validar_url();
    var retorno_password = validar_password();
    var retorno_confirmar_password = confirmar_password(retorno_password);
    var retorno_comuna = validar_comuna();
    var retorno_direccion = validar_direccion();
    var retorno_array = validar_array();
    return (retorno_direccion && retorno_comuna && retorno_correo && retorno_password && retorno_confirmar_password && retorno_numero && retorno_url && retorno_array);
}

function validar_correo() {
    var input_email = document.getElementById("input-email");
    var div_error_email = document.getElementById("error-email");
    var correo = input_email.value;
    var pos_arroba = correo.indexOf("@");
    var pos_punto = correo.lastIndexOf(".");
    var arr_correo = correo.split(".");
    var extension = arr_correo[arr_correo.length - 1];
    if (pos_arroba > 0 && pos_punto > pos_arroba && (extension.length > 1 && extension.length <= 3 )) {
        div_error_email.innerHTML = "";
        return true;
    } else {
        div_error_email.innerHTML = "El correo electrónico no tiene el formato correcto";
        div_error_email.className = "text-danger small mt-1";
        return false;
    }
}

function validar_direccion(){
    var input_direccion = document.getElementById("input-direccion");
    var div_error_direccion = document.getElementById("error-direccion");
    var direccion = input_direccion.value;
    if (direccion == ""){
        div_error_direccion.innerHTML = "Debe ingresar la direccion";
        div_error_direccion.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_direccion.innerHTML = "";
        return true;
    }
}

function validar_comuna() {
    var select_comuna = document.getElementById("select-comuna");
    var div_error_comuna = document.getElementById("error-comuna");
    var comuna = select_comuna.value;
    if (comuna == "default") {
        div_error_comuna.innerHTML = "Debe seleccionar una comuna";
        div_error_comuna.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_comuna.innerHTML = "";
        return true;
    }
}


function validar_password() {
    var input_password = document.getElementById("input-password");
    var div_error_password = document.getElementById("error-password");
    var div_error_confirm_password = document.getElementById("error-confirm-password");
    var password = input_password.value;
    if(password == ""){
        div_error_password.innerHTML = "Debe ingresar la contraseña";
        div_error_password.className = "text-danger small mt-1";
        return false;
    } else if (password.length < 3){
        div_error_password.innerHTML = "La contraseña es muy corta!";
        div_error_password.className = "text-danger small mt-1";
        div_error_confirm_password.innerHTML = "";
        return false;
    } else if (password.length > 6){
        div_error_password.innerHTML = "La contraseña es muy larga!";
        div_error_password.className = "text-danger small mt-1";
        div_error_confirm_password.innerHTML = "";
        return false;
    } else if (password.search(/\d/) == -1) {
        div_error_password.innerHTML = "La contraseña debe contener un numero!";
        div_error_password.className = "text-danger small mt-1";
        div_error_confirm_password.innerHTML = "";
        return false;
    } else if (password.search(/[a-zA-Z]/) == -1) {
        div_error_password.innerHTML = "La contraseña debe contener una letra!";
        div_error_password.className = "text-danger small mt-1";
        div_error_confirm_password.innerHTML = "";
        return false;
    } else {
        div_error_password.innerHTML = "";
        div_error_confirm_password.innerHTML = "";
        return true;
    }
}

function confirmar_password(pass){
    var input_confirm_password = document.getElementById("input-confirm-password");
    var input_password = document.getElementById("input-password");
    var div_error_confirm_password = document.getElementById("error-confirm-password");
    var confirm_password = input_confirm_password.value;
    var password = input_password.value;
    if (pass == false){
        div_error_confirm_password.innerHTML = "La contraseña no es valida";
        div_error_confirm_password.className = "text-danger small mt-1";
        return false;
    } else if (confirm_password != password){
        div_error_confirm_password.innerHTML = "Las contraseñas no coinciden";
        div_error_confirm_password.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_confirm_password.innerHTML = ""
        return true;
    }
}

function validar_telefono(){
    var input_telefono = document.getElementById("input-telefono");
    var div_error_telefono = document.getElementById("error-telefono");
    var telefono_completo = input_telefono.value;
    var telefono = telefono_completo.replace(/\s/g, "");
    var pos_mas = telefono.indexOf("+");
    if (telefono == ""){
        div_error_telefono.innerHTML = "Debe ingersar el telefono";
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    } else if(pos_mas != 0 && telefono.length !=12){
        div_error_telefono.innerHTML = "Numero Invalido, formato invalido";
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    } else if (telefono.search(/[a-zA-Z]/) > 0) {
        div_error_telefono.innerHTML = "Numero Invalido, no puede contener letras";
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_telefono.innerHTML = "";
        return true;
    }
}

function validar_url(){
    var input_url = document.getElementById("input-url");
    var div_error_url = document.getElementById("error-url");
    var url = input_url.value;
    var res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if (url == ""){
        div_error_url = "";
        return true;
    } else if(res == null){
        div_error_url.innerHTML = "URL no es valido";
        div_error_url.className = "text-danger small mt-1";
        return false;
    }else {
        div_error_url.innerHTML = "";
        return true;
    }
}

function validar_array(){
    cosas = personas.length;
    var div_error_aficion = document.getElementById("error-aficion");
    if (cosas < 2){
        div_error_aficion.innerHTML = "Ingrese 2 aficiones";
        div_error_aficion.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_aficion.innerHTML = "";
        return true;
    }
}

function actualizar() {
    var div = document.getElementById("lista");
    div.innerHTML = "";
    var label = document.createElement("label");
    var ul = document.createElement("ul");
    ul.className = "list-group";
    label.innerHTML = "Lista de aficiones/pasatiempos";
    label.className = "form-label";
    for (var i = 0; i < personas.length ; i++) {
        //console.log("Item " + i + ": " + personas[i]);
        var li = document.createElement("li");
        li.innerHTML = personas[i];
        li.className = "list-group-item";
        ul.appendChild(li);
    }
    div.appendChild(ul);
}

function agregar() {
    var input_aficion = document.getElementById("input-aficion");
    var div_error_aficion = document.getElementById("error-aficion");
    var aficion = input_aficion.value;
    if (aficion != "") {
        personas.push(aficion);
        input_aficion.value = "";
        div_error_aficion.innerHTML = "";
        actualizar();
    } else {
        div_error_aficion.innerHTML = "Ingrese una aficion";
        div_error_aficion.className = "text-danger small mt-1";
    }
}

//function validar_lenguajes() {
//    var check_lenguajes = document.getElementsByClassName("form-check-input");
//    var div_error_lenguajes = document.getElementById("error-lenguajes");
//    for (var i in check_lenguajes) {
//        console.log(check_lenguajes[i].checked);
//        if (check_lenguajes[i].checked) {
//            div_error_lenguajes.innerHTML = "";
//            return true;
//        }    
//    }
//    div_error_lenguajes.innerHTML = "Debe seleccionar al menos un lenguaje";
//    div_error_lenguajes.className = "text-danger small mt-1";
//    return false;
//}



//function validar_apellido() {
//    var input_apellido = document.getElementById("input-apellido");
//    var div_error_apellido = document.getElementById("error-apellido");
//    var apellido = input_apellido.value;
//    if (apellido == "") {
//        div_error_apellido.innerHTML = "El apellido es obligatorio";
//        div_error_apellido.className = "text-danger small mt-1";
//        return false;
//    } else if (apellido.length > 20) {
//        div_error_apellido.innerHTML = "El apellido no puede tener mas de 20 caracteres";
//        div_error_apellido.className = "text-danger small mt-1";
//        return false;
//    } else {
//        div_error_apellido.innerHTML = "";
//        return true;
//    }
//}

//function validar_nombre() {
//    var input_nombre = document.getElementById("input-nombre");
//    var div_error_nombre = document.getElementById("error-nombre");
//    var nombre = input_nombre.value;
//    if (nombre == "") {
//        div_error_nombre.innerHTML = "El nombre es obligatorio";
//        div_error_nombre.className = "text-danger small mt-1";
//        return false;
//    }  else if (nombre.length > 20) {
//        div_error_nombre.innerHTML = "El nombre no puede tener mas de 20 caracteres";
//        div_error_nombre.className = "text-danger small mt-1";
//        return false;
//    } else {
//        div_error_nombre.innerHTML = "";
//        return true;
//    }
//}