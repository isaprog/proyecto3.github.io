let boton_no = document.querySelector('#bno');

boton_no.addEventListener('mouseover', mov);

function mov(){
    if(boton_no.classList.contains('posicion_normal')){
        boton_no.classList.replace('posicion_normal','mvt1');
    } else if (boton_no.classList.contains('mvt1')){
        boton_no.classList.replace('mvt1','mvt2');
    } else if (boton_no.classList.contains('mvt2')){
        boton_no.classList.replace('mvt2','mvt3');
    } else if (boton_no.classList.contains('mvt3')){
        boton_no.classList.replace('mvt3','posicion_normal');
    }
}

let boton_si = document.getElementById("bsi");

boton_si.addEventListener('click', function(){
    document.getElementById("texto_oculto").removeAttribute("hidden")
    console.log("click")
    document.getElementById("t1").style.display = "none";
    document.getElementById("bsi").style.display = "none";
    document.getElementById("bno").style.display = "none";
})
