const PIEDRA= "piedra";
const PAPEL= "papel";
const TIJERAS= "tijeras";

const EMPATE= 1;
const GANA= 2;
const PIERDE= 3;

const botonpiedra= document.getElementById("piedra");
const botontijeras= document.getElementById("tijeras");
const botonpapel= document.getElementById("papel");
const texto_mensaje= document.getElementById("texto_mensaje");
const imagen_usuario= document.getElementById("imagen_usuario")
const imagen_maquina= document.getElementById("imagen_maquina")
let contador=0
let cantidad=0

cantidad=parseInt(prompt("Digita la cantidad de veces a jugar"))



function desactivar()
    {
        let desactivar=false

        if (cantidad === contador) {
            desactivar = true;
        } else {
            desactivar = false;
        }
        if(desactivar == true){
            botonpiedra.disabled = true;
            botontijeras.disabled = true;
            botonpapel.disabled = true;
        }
    }
botonpiedra.addEventListener("click", ()=>{
    jugar(PIEDRA)
    contador+=1;
    desactivar();
    
});
botontijeras.addEventListener("click", ()=>{
    jugar(TIJERAS);
    contador+=1;
    desactivar();
    
    
});
botonpapel.addEventListener("click", ()=>{
    jugar(PAPEL);
    contador+=1;
    desactivar();
    
    
});
function suma() {
    let marcador_usuario = document.getElementById("marcador_usuario");
    let numer = parseInt(marcador_usuario.innerHTML);
    numer += 1;
    marcador_usuario.innerHTML = numer
}
function suma1() {
    let marcador_maquina= document.getElementById("marcador_maquina");
    let numer2 = parseInt(marcador_maquina.innerHTML);
    numer2+=1
    marcador_maquina.innerHTML= numer2
}
function suma2() {
    let empates= document.getElementById("empates");
    let numer3 = parseInt(empates.innerHTML);
    numer3+=1
    empates.innerHTML= numer3
}
function jugar(eleccionusuario){
    const eleccionmaquina= calcularopcionmaquina();
    const resultado = calcularresultado(eleccionusuario,eleccionmaquina);
    
    imagen_usuario.src = "./"+eleccionusuario+".png";

    texto_mensaje.innerHTML= "¡Eligiendo!"

    setTimeout(function(){
        imagen_maquina.src = "./"+eleccionmaquina+".png";
    
        switch(resultado){
             case EMPATE:
                texto_mensaje.innerHTML= "¡Empataste!"
                suma2()
                break
            case GANA:
                texto_mensaje.innerHTML= "¡Ganaste!"
                suma()
                break
            case PIERDE:
                texto_mensaje.innerHTML= "¡Perdiste!"
                suma1()
                break
            }
    },2000);
  
}

function calcularopcionmaquina(){
    const numero = Math.floor(Math.random()*3)+1
    switch(numero){
    case 1: 
        return PIEDRA;
    case 2:
        return PAPEL;
    case 3:
        return TIJERAS
    }
}

function calcularresultado(eleccionusuario,eleccionmaquina){
    if(eleccionusuario === eleccionmaquina){
        return EMPATE;
        
    }
    else if(eleccionusuario === PIEDRA ){
        if(eleccionmaquina === PAPEL) return PIERDE
        
        if(eleccionmaquina === TIJERAS) return GANA
        
    }
    else if(eleccionusuario === PAPEL ){
        if(eleccionmaquina === TIJERAS) return PIERDE
        if(eleccionmaquina === PIEDRA) return GANA
    }
    else if(eleccionusuario === TIJERAS ){
        if(eleccionmaquina === PIEDRA) return PIERDE
        if(eleccionmaquina === PAPEL) return GANA
    }

}