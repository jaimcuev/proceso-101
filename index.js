const proceso = (minutos, minutoActual = 0) => {
    console.log(`Durmiendo hace ${minutoActual} minuto(s)`);
    if( minutoActual < minutos ) {
        setTimeout(() => proceso(minutos, minutoActual + 1), 1000 * 60);
    }
}

const minutos = 25;
proceso(minutos);
