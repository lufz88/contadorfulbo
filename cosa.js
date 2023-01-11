let numero = 0;

document.getElementById("mas").onclick = function() {
    if (numero < 9) {
        numero = numero +1;
        document.getElementById("contador").innerHTML = numero;
    } else if(numero = 9) {
        numero = numero +1;
        document.getElementById("contador").innerHTML = numero;
        document.getElementById("mensaje-llegaste").style.display = "flex";   
    }
}


document.getElementById("menos").onclick = function() {
    if (numero > 0) {
        numero = numero -1;
    } else {
        numero = 0;    
    }
    document.getElementById("contador").innerHTML = numero;
}

document.getElementById("reset").onclick = function() {
    numero = 0;
    document.getElementById("contador").innerHTML = numero;
    document.getElementById("mensaje-llegaste").style.display = "none";
    document.getElementById("mensaje-suspender").style.display = "none"; 
}

document.getElementById("suspender").onclick = function() {
        document.getElementById("mensaje-suspender").style.display = "flex"; 
}

