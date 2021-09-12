
var numero1=prompt('primer numero');
var numero2=prompt('segundo numero');

function operaciones(numero1,numero2){
    var suma=numero1 + numero2;
    var resta= numero1 - numero2;
    var multi=numero1 * numero2;
    var div=numero1 / numero2;
    document.write(' suma ' + suma + '<br> resta ' + resta + '<br>multiplicacion ' + multi + '<br> division ' + div);
}
operaciones(numero1,numero2);
