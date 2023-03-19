export const Pausar = ( intervalo ) => {
    const pausarBtn = document.querySelector('.button-pausar'); 
    const iniciarBtn = document.querySelector('.button-iniciar');

    pausarBtn.addEventListener('click', () => {
        clearInterval(intervalo);
        pausarBtn.disabled = true;
        iniciarBtn.disabled = false;

    })
    
}