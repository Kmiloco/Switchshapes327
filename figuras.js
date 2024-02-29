let lado,base,altura,radio,opcion,resulado;
const PI=3.1415

alert("----Cuadrado=1----Triangulo=2----Circulo=3----");

opcion=parseInt(prompt("Seleccione la figura a la cual desea calcular su area"));

switch(opcion){
    case 1: 
    lado=parseInt(prompt("Ingrese uno de los lados del cuadrado en cm"));
    resulado=lado*lado;
    alert("El area del cuadrado es de: "+resulado+" centimetros");
    break;
    case 2:
    base=parseFloat(prompt("Ingrese la base del triangulo en cm"));
    altura=parseFloat(prompt("Ingrese la altura del triangulo en cm "));
    resulado=base*altura/2
    alert("El area del triangulo es de: "+resulado+" centimetros cuadrados");
    break;
    case 3:
    radio=parseFloat(prompt("Ingrese el radio del circulo en cm"));
    resulado=radio*radio*PI;
    alert("El area del circulo es de: "+resulado+" centimetros cuadrados");
    break;
    default:
    alert("Opcion no disponible");
    break;
}
/* Codigo para encontrar areas de figuras*/