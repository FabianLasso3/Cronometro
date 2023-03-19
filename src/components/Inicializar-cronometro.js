import { Conversor } from "./conversor";
import { Pausar } from "./Pausar";
import { Reiniciar } from "./Reiniciar";

export const InicializarCronometro = () => {
    const tiempoDiv = document.querySelector('.tiempo');
    const iniciarBtn = document.querySelector('.button-iniciar');
    const pausarBtn = document.querySelector('.button-pausar'); 

    let segundos = 1;
    iniciarBtn.addEventListener('click', () => {
        const intervalo = setInterval(() => {
            let incremento = segundos++;
            tiempoDiv.innerText = Conversor(incremento)
            
            iniciarBtn.disabled = true;
            pausarBtn.disabled = false

            Pausar(intervalo);
            Reiniciar();
        }, 1000);
    });
   
}