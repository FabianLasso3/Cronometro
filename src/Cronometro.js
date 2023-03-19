import { InicializarCronometro } from './components/Inicializar-cronometro';
import html from './presentacion/cronometro.html?raw'
import './presentacion/cronometro.css'

export const Cronometro = ( element ) => {
    const contendor = document.createElement('div')
    contendor.innerHTML = html;
    element.append(contendor); 
    InicializarCronometro();
}