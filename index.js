
function inicio(){
    document.getElementById('texto').addEventListener('keyud', function(){
        this.value=this.value.toUpperCase();
    },true);
    document.getElementById('encriptar').addEventListener('click',function(){
        let texto=document.getElementById('texto').value;
    },true);
    document.getElementById('desencriptar').addEventListener('click',function(){
        let texto=document.getElementById('texto').value;
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
                resultado+=textp[i];
            }
        }
    }
    return resultado
}