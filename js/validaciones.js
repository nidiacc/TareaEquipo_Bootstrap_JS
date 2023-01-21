
function validarFormulario(formulario){

    //obtener los strings del input nombre para procesarlos y hacer conteo de palabras
    var  nombrecompleto = document.getElementById("nombre").value;
    var contarespacio = nombrecompleto.split(" "); //separa e string del espacio
    var numeroPalabras = contarespacio.length; //tamaño del string
    var result = /^[a-zA-Z\s]+$/.test(nombrecompleto);

    //variables para la evaluación del password
    var pass = document.getElementById("password").value;
    var passcount = pass.length; //tamaño del string
    var caracteres = /((?=.*[a-z])(?=.*[\W]).{8,64})/g; //expresión regular para password

    //variables para evaluar el cp
    var cp = document.getElementById("cp").value;
    const regex = /^[0-9]*$/; //expresión regular para CP que solo acepte numeros
    var codigoPostaltamaño = cp.length;//tamaño del string
   
    //variables para evaluar tamaño de caracteres de direccion y ciudad
    var  direcciontamaño = document.getElementById("direccion").value;
    var  ciudadtamaño = document.getElementById("ciudad").value;


     // evalua si el campo nombre esta vacío
    if((document.getElementById("nombre").value)==false) {
        document.getElementById("nombreinvalido").innerHTML="Escriba el nombre";
        document.getElementById("nombre").className = document.getElementById("nombre").className + " is-invalid"; 
        return false; // sale de la función y NO envía el formulario

    }
    //sino, vuelve el campo sin errores
    else{ //sino, vuelve el campo sin errores
        document.getElementById("nombre").className = document.getElementById("nombre").className.replace(" is-invalid", "");
        document.getElementById("nombreinvalido").innerHTML=null;

    }
    // evalua si el campo nombre tiene al menos dos palabras
    if(numeroPalabras <= 1) { 
        document.getElementById("errornombrecompleto").innerHTML="Escriba nombre y apellido";
        document.getElementById("nombre").className = document.getElementById("nombre").className + " is-invalid"; 
        return false; // sale de la función y NO envía el formulario
       
    }
    if(result==false){
        document.getElementById("nombreinvalido").innerHTML="El nombre no debe tener numeros";
        document.getElementById("nombre").className = document.getElementById("nombre").className + " is-invalid";     
        return false; // sale de la función y NO envía el formulario


    }
    
    //sino, vuelve el campo sin errores
    else{ 
        document.getElementById("nombre").className = document.getElementById("nombre").className.replace(" is-invalid", "");
        document.getElementById("errornombrecompleto").innerHTML=null;

    }
    // evalua si esta vació o incorrecto el campo email
    if((document.getElementById("email").value)==false || !valida_email(document.getElementById("email").value)){ 
        document.getElementById("errorcorreo").innerHTML="Por favor un correo válido";
        document.getElementById("email").className = document.getElementById("email").className + " is-invalid"; 
        return false; // sale de la función y NO envía el formulario
        
    }
    //sino, vuelve el campo sin errores
    else{
        document.getElementById("email").className = document.getElementById("email").className.replace(" is-invalid", "");
        document.getElementById("errorcorreo").innerHTML=null;

    }
    //evalua el campo password si esya vacío
    if((document.getElementById("password").value)==false) {
        document.getElementById("errorcontraseña").innerHTML="Escriba la contraseña";       
        document.getElementById("password").className = document.getElementById("password").className + " is-invalid"; 
        return false; // sale de la función y NO envía el formulario
    }
    //si no esta vacío entonces borra el mensaje de error
    else{ 
        document.getElementById("password").className = document.getElementById("password").className.replace(" is-invalid", "");
        document.getElementById("errorcontraseña").innerHTML=null;

    }
    //evalua si el password tiene al menos 8 caracteres
    if(passcount < 8) {
        document.getElementById("errorcaracteres").innerHTML="Escriba contraseña minimo 8 caracteres";       
        document.getElementById("password").className = document.getElementById("password").className + " is-invalid"; 
        return false; // sale de la función y NO envía el formulario

    } 
    //si no, entonces evalua que el password tenga al menos un caracter especial
    else if((caracteres.test(pass))==false){
        
            document.getElementById("password").className = document.getElementById("password").className.replace(" is-invalid", "");
            document.getElementById("errorcaracteres").innerHTML=null;
            document.getElementById("errorcaracteresespeciales").innerHTML="Escriba contraseña minimo 1 caracter especial";       
            document.getElementById("password").className = document.getElementById("password").className + " is-invalid";
            return false; // sale de la función y NO envía el formulario
    }
    //sino, entonces elimina el mensaje de error
    else{

        document.getElementById("password").className = document.getElementById("password").className.replace(" is-invalid", "");
        document.getElementById("errorcaracteresespeciales").innerHTML=null;

    }
    //evalua si el campo esta vacío
    if((document.getElementById("direccion").value)==false) {
        document.getElementById("errordireccion").innerHTML="Campo requerido";       
        document.getElementById("direccion").className = document.getElementById("direccion").className + " is-invalid"; 
        return false; // sale de la función y NO envía el formulario
    }
    //evalua si el campo esta vacío
    else if(direcciontamaño.length > 150) {
        document.getElementById("errordireccion").innerHTML=null;
        document.getElementById("errordireccion").innerHTML="El campo no debe tener más de 150 caracteres";       
        document.getElementById("direccion").className = document.getElementById("direccion").className + " is-invalid"; 
        return false; // sale de la función y NO envía el formulario
    }
    //sino, vuelve el campo sin errores
    else{ 
        document.getElementById("direccion").className = document.getElementById("direccion").className.replace(" is-invalid", "");
        document.getElementById("errordireccion").innerHTML=null;

    }
    //evalua si el campo esta vacío
    if((document.getElementById("ciudad").value)==false) {
        document.getElementById("errorciudad").innerHTML="Campo requerido";       
        document.getElementById("ciudad").className = document.getElementById("ciudad").className + " is-invalid"; 
        return false; // sale de la función y NO envía el formulario
    }
    else if(ciudadtamaño.length > 50) {
        document.getElementById("errorciudad").innerHTML=null;
        document.getElementById("errorciudad").innerHTML="El campo no debe tener más de 50 caracteres";       
        document.getElementById("ciudad").className = document.getElementById("direccion").className + " is-invalid"; 
        return false; // sale de la función y NO envía el formulario
    }
    //sino, vuelve el campo sin errores
    else{ 
        document.getElementById("ciudad").className = document.getElementById("ciudad").className.replace(" is-invalid", "");
        document.getElementById("errorciudad").innerHTML=null;

    }
    //evalua si tiene una opción seleccionada
    if((document.getElementById("estado").value)==false) {
        document.getElementById("errorestado").innerHTML="Campo requerido";       
        document.getElementById("estado").className = document.getElementById("estado").className + " is-invalid"; 
        return false; // sale de la función y NO envía el formulario
    }
    //sino, vuelve el campo sin errores
    else{ 
        document.getElementById("estado").className = document.getElementById("estado").className.replace(" is-invalid", "");
        document.getElementById("errorestado").innerHTML=null;

    }
    //evalua si el campo esta vacío
    if((document.getElementById("cp").value)==false) {
        document.getElementById("errorcp").innerHTML="Campo requerido";       
        document.getElementById("cp").className = document.getElementById("cp").className + " is-invalid"; 
        return false; // sale de la función y NO envía el formulario
    }
    //sino, entonces evalua que tenga 5 caracteres
    else if(codigoPostaltamaño != 5){
        document.getElementById("errorcp").innerHTML=null;
        document.getElementById("errorcpdigitostamaño").innerHTML="El CP debe tener 5 digitos";       
        document.getElementById("errorcpdigitos").innerHTML=null;
        return false; // sale de la función y NO envía el formulario


    }
    // sino, evalua que se ingrese solo numeros
    else if((regex.test(cp)) == false){
        document.getElementById("errorcpdigitostamaño").innerHTML=null;
        document.getElementById("errorcpdigitos").innerHTML="El CP debe tener solo numeros";       
        return false; // sale de la función y NO envía el formulario


    }
    //sino, vuelve el campo sin errores
    else {
        document.getElementById("cp").className = document.getElementById("cp").className.replace(" is-invalid", "");
        document.getElementById("errorcpdigitos").innerHTML=null;
         
         
    }
   
    var botonmodal = document.getElementById('activar_modal');

    botonmodal.click();
  
   
return false;
     

 //se envía el formulario si todo esta correcto
}

// función para validar el correo electrónico
function valida_email(valor) { 
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valor)){
        return true;
    }
    return false;
}
//funcion para enviar el formulario ya con los datos correctos
 function enviar_formulario(formulario){
    document.formulario.submit()
    return true;

 }