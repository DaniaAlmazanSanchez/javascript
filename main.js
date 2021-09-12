//comentario de una linea
//alert('hola');
/* comentario multilinea*/ 
/*alert('hi');
alert('saludos');*/

//varibles
//el valor puede cambiar
var nombre='Dania';
var apellido='Almazan';
var edad=26;

let color='azul';
let telefono;
telefono=1234;

// constantes
//el valor no cambia

const estudiante=12;
const gravedad= 99;
//gravedad='no hay';
 

//let y var diferenccias
//var
var numero=40;
if(true){
    var numero=30;
    console.log(numero);//30
}
console.log(numero);//30

//let
var numero2=55;//da 55
console.log(numero2);
if(true){
    let numero2=53;// da 53 no cambia el valor
    console.log(numero2);
}
console.log(numero2);//55

//tipos de datos
console.log(typeof(nombre));

alert(nombre);
//const eda=18;
const eda=prompt('edad:');
if(eda>18 && eda<29){
    console.log('eres mayor de edad');
} else if(eda>=18){
    console.log('tienes 18 años');
}else{
    console.log('eres menor de edad');
}