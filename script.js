const inputTexto = document.querySelector("#input-texto");
const outputTexto = document.querySelector("#output-texto");
const matrizEncriptado = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
const textB= document.querySelector(".text-b");
const btnCopiar= document.querySelector(".btn-copiar");

btnCopiar.style.display="none";

//
function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    outputTexto.value = textoEncriptado;
    outputTexto.style.backgroundImage="none";
    textB.style.display ="none";
    btnCopiar.style.display="";
    inputTexto.value="";
}
//
function encriptar(stringEncriptar){

   stringEncriptar = stringEncriptar.toLowerCase();

   for (let i = 0; i < matrizEncriptado.length; i++) {

        if(stringEncriptar.includes(matrizEncriptado[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizEncriptado[i][0],matrizEncriptado[i][1]);
        }
   } 
   return stringEncriptar;
}
//
function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    outputTexto.value = textoEncriptado;
    inputTexto.value="";
    btnCopiar.style.display="";
}
//
function desencriptar(stringDesencriptar){

   stringDesencriptar = stringDesencriptar.toLowerCase();

   for (let i = 0; i < matrizEncriptado.length; i++) {

        if(stringDesencriptar.includes(matrizEncriptado[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizEncriptado[i][1],matrizEncriptado[i][0]);
        }
   } 
   return stringDesencriptar;    
}
//
function copiar(){
    outputTexto.select();
    navigator.clipboard.writeText(outputTexto.value);
    alert("Copiado");
    outputTexto.value="";
    btnCopiar.style.display="none";
    outputTexto.style.backgroundImage="";
    textB.style.display ="";
    inputTexto.focus();
}