/*DECLARACION DE CONSTANTES Y VARIABLES*/

const botonEncriptar = document.querySelector(".botonEncriptar");
const botonDesencriptar = document.querySelector(".botonDesencriptar");
const imagen = document.querySelector(".seccionDeImagen");
var caja = document.querySelector(".seccionMensaje");
var encriptado = document.querySelector(".textoConvertido");
const botonCopiar = document.querySelector(".botonCopiar");

/*FUNCIONES DE BOTONES*/

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

/*FUNCIONES PARA MOSTRAR EL TEXTO CONVERTIDO Y ELIMINAR LA IMAGEN DE FONDO*/

function encriptar(){
    suprimirImagen();
    var contenedorTexto = GuardarTexto()
    encriptado.textContent = encriptarTexto(contenedorTexto);
}

function desencriptar(){
    suprimirImagen();
    var contenedorTexto = GuardarTexto()
    encriptado.textContent = desencriptarTexto(contenedorTexto);
}

function GuardarTexto(){
    var contenedorTexto = document.querySelector(".cajaDeTexto")
    return contenedorTexto.value
}

function suprimirImagen(){
    imagen.classList.add("suprimir");
    caja.classList.add("suprimir");
}

/*FUNCION DE ENCRIPTAR*/

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoEncriptado = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoEncriptado = textoEncriptado + "ai"
        }
        else if(texto[i] == "e"){
            textoEncriptado = textoEncriptado + "enter"
        }
        else if(texto[i] == "i"){
            textoEncriptado = textoEncriptado + "imes"
        }
        else if(texto[i] == "o"){
            textoEncriptado = textoEncriptado + "ober"
        }
        else if(texto[i] == "u"){
            textoEncriptado = textoEncriptado + "ufat"
        }
        else{
            textoEncriptado = textoEncriptado + texto[i]
        }
    }
    return textoEncriptado;

}

/*FUNCION DE DESENCRIPTAR*/

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoEncriptado = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoEncriptado = textoEncriptado + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoEncriptado = textoEncriptado + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoEncriptado = textoEncriptado + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoEncriptado = textoEncriptado + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoEncriptado = textoEncriptado + "u"
            i = i+3;
        }
        else{
            textoEncriptado = textoEncriptado + texto[i];
        }
        
    }

    return textoEncriptado;

}

/*FUNCION DE COPIAR EL TEXTO CONVERTIDO*/


botonCopiar.addEventListener("click", copiar = () => {
    var contenidoTexto = document.querySelector(".textoConvertido").textContent;
    navigator.clipboard.writeText(contenidoTexto);
});