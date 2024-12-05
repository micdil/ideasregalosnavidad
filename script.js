function toggleMusic() {
    var audio = document.getElementById('musica');
    var icon = document.getElementById('playPauseIcon');
    if (audio.paused) {
        audio.play();
        icon.classList.remove('fa-play'); // Remover icono de Play
        icon.classList.add('fa-pause'); // Agregar icono de Pause
    } else {
        audio.pause();
        icon.classList.remove('fa-pause'); // Remover icono de Pause
        icon.classList.add('fa-play'); // Agregar icono de Play
    }
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    // Posición inicial aleatoria
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    
    // Añadir el copo al contenedor de nieve
    document.getElementById('snow').appendChild(snowflake);
    
    // Animación
    setTimeout(() => {
        snowflake.style.transition = 'top 5s linear';
        snowflake.style.top = window.innerHeight + 'px'; // Caer hasta el fondo
        snowflake.addEventListener('transitionend', () => {
            snowflake.remove(); // Eliminar el copo después de caer
        });
    }, 10);
}

// Generar copos de nieve continuamente
setInterval(createSnowflake, 300); // Cada 300 ms