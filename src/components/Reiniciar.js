export const Reiniciar = () => {
    const reiniciarBtn = document.querySelector('.button-reiniciar');

    reiniciarBtn.addEventListener('click', () => {
        location.reload();
    })
}