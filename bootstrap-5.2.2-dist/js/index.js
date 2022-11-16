//inicio de el codigo de js
//en este codigo se hara control de los cambios respectivos de cada cosa minima
function formulario(event) {
    event.preventDefault();
    //se tiene que hacer un descuento dependiendo el tipo
    let cantidad=document.getElementById('cantidad').value; //obtengo el valor de el input del number
    let dato= document.getElementById('select');
    let total=0;
    if(dato.value="Estudiante"){
        //el estudiante tendra un descuento de el 80%
        total=(cantidad*200);
        total=total-total*0.80;

        var escritura=document.getElementById('Pago');
        escritura.innerText="El total a pagar es: "+ total.toString();
    }else if(dato.value="Trainee"){
        //el estudiante tendra un descuento de el 50%
        total=(cantidad*200);
        total=total-total*0.50;

        var escritura=document.getElementById('Pago');
        escritura.innerText="El total a pagar es: "+ total.toString();
    }else{
        //el estudiante tendra un descuento de el 15%
        total=(cantidad*200);
        total=total-total*0.15;

        var escritura=document.getElementById('Pago');
        escritura.innerText="El total a pagar es: "+ total.toString();
    }
    return false;
}

document.getElementById('enviar').addEventListener('click',formulario);
