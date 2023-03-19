export const Conversor = ( segundos ) => {

    let hora = Math.floor(segundos / 3600);
    hora = (hora < 10) ? '0' + hora : hora;

    let minuto = Math.floor((segundos / 60));
    minuto = (minuto < 10)? '0' + minuto : minuto;

    let segundo = segundos;
    segundo = (segundo < 10)? '0' + segundo : segundo;

    return hora + ':' + minuto + ':' + segundo;

}
