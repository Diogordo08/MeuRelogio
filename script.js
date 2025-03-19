let outras = document.getElementById("outras");

// Relogio //
let intervaloRelogio = null;

function atualizarRelogio(){
    let agora = new Date();
    let horas = agora.getHours().toString().padStart(2, '0');
    let minutos = agora.getMinutes().toString().padStart(2, '0');
    let segundos = agora.getSeconds().toString().padStart(2, '0');

    document.getElementById('relogio').textContent = `${horas}:${minutos}:${segundos}`;
}

function relogio(){
    outras.style.opacity = "0";
    parar();
    intervaloRelogio = setInterval(atualizarRelogio, 1000);
    atualizarRelogio();
}


// Cronometro //
let milisegundos = 0; 
let intervaloCrono = null;

function atualizarCrono(){
    milisegundos++;
    document.getElementById("relogio").textContent = formatarTempo(milisegundos);
}

function formatarTempo(){
    const horas = Math.floor(milisegundos / (1000 * 60 * 60));
    const minutos = Math.floor((milisegundos % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((milisegundos % (1000 * 60)) / 1000);
    const milisecs = milisegundos % 1000;

    return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2,'0')}:${milisecs.toString().padStart(3,'0')}`;
}

function cronometro(){
    outras.style.opacity = "1";
    parar();
    intervaloCrono = setInterval(atualizarCrono, 10);
    atualizarCrono();
}

function parar(){
    clearInterval(intervaloCrono);
    clearInterval(intervaloRelogio);
    intervaloCrono = null
    intervaloRelogio = null
}

function resetar(){
    milisegundos = 0;
    parar();
    return document.getElementById("relogio").textContent = `00:00:00:000`;
}
