window.addEventListener("load",inicio,true);

function inicio(){
    document.getElementById('texto').addEventListener('keyup', function(){
        this.value=this.value.toLowerCase();
    },true);
    document.getElementById('encriptar').addEventListener("click",function(){
        let texto=document.getElementById('texto').value;
        document.getElementById('resultado').value=cifrar(texto);
    },true);
    document.getElementById('desencriptar').addEventListener("click",function(){
        let texto=document.getElementById('texto').value;
        document.getElementById('resultado').value=decifrar(texto);
    },true);
};

function cifrar(texto){
    let resultado='';
    let letras=['a','e','i','o','u'];
    if (texto){
        for (let i=0; i<texto.length; i++){
            if(letras.indexOf(texto[i])!=-1){
                var posicion=letras.indexOf(texto[i]);
                if(texto[i]=='a'){
                    resultado+='ai'
                };
                if(texto[i]=='e'){
                    resultado+='enter'
                };
                if(texto[i]=='i'){
                    resultado+='imes'
                };
                if(texto[i]=='o'){
                    resultado+='ober'
                };
                if(texto[i]=='u'){
                    resultado+='ufat'
                };
            }
            else{
                resultado+=texto[i];
            }
        }
    }
    return resultado
    console.log(resultado)
};
function ocultar(){
    document.getElementById('mensaje').style.display='none'
}
