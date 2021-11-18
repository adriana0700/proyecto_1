// const submit = document.getElementById("btn-submit-form");
// //se crea un evento de botón desde donde se va a envíar
// submit.addEventListener('click', validacion);
// //esta es la función en el botón que va a verificar los datos en el formulario. Es acá adentro donde debería ponerse la función que verifique cada campo específico
// //dentro de un if
// function validacion(e){
//     ///e.preventDefault();

//     if(checkId(id)){//acá se llama la función checkCorreo que valida el campo del correo
//     }

//     if(checkNombre(nombre)){//acá se llama la función checkContrasena que valida el campo de la contraseña

//     }
   
//     return true
  
// }
//acá se crean las funciones específicas para cada campo
let id = document.getElementById("id");
let ExpId=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function checkId(id){
    if(ExpId.test(id)){
        alert("exito"); 
        return true;
    }
    else{
        alert("error");
        return false;
    }
}

// let nombre = document.getElementById("nombre");
// let ExpNombre =/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
// function  checkNombre(nombre){   
  
//     if(ExpNombre.test(nombre)){
//         alert("exito");
//         return true;
//     }
//     else{
//         alert("error");

//         return false;
//     }
// }


// let apellido = document.getElementById("apellido");
// let ExpApellido =/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{4,30}$/
// function  checkApellido(apellido){ 
    
//     if(ExpApellido.test(apellido)){
//         alert("exito");

//         return true;
//     }
//     else{
//         alert("error, este campo no debe de contener numeros");

//         return false;
//     } 
// }

// let email = document.getElementById("email");
// let ExpEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// function checkCorreo(email){
//     if(ExpEmail.test(email)){
//         alert("exito");

//         return true;
//     }
//     else{
//         alert("error, verifique su correo");

//         return false;
//     }
// }

// let telefono = document.getElementById("telefono");
// let ExpTelefono =/^\d{7,10}$/;
// function checkTelefono(telefono){
   
//     if(ExpTelefono.test(telefono)){
//         alert("exito");

//         return true;
//     }
//     else{
//         alert("error, este campo no debe de contener letras");
//         return false;
//     }
// }

// let semestre= document.getElementById("semestre");
// ExprSemestre =/^\d{1}$/;
// function checkSemestre(semestre){
//     debugger;
//     if(ExprSemestre.test(semestre)){
//         alert("exito");

//         return true;
//     }
//     else{
//         alert("error, solo se admite un digito")
//         return false;
//     }
// }

