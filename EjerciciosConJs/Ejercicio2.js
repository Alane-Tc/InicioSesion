let n1=5;
let n2=6;
let n3=10;

//SUMA CON UNA FUNCION
function suma(Numero1, Numero2) {
    var Suma_Total= Numero1+ Numero2;
    console.log(Suma_Total);
}
suma(n1,n2);
suma(n2,n3);

//SUMA DE FLECHA
let a=10;
let b=15;
let c=30;

let Hacer_Suma=(a,b,c) => a+b+c;
console.log(Hacer_Suma(a,b,c));

//SABER PAR O IMPAR CON FUNCION
function KnowParOrImpar(n) {
    
}
//saludo
function saludo(Nombre) {
    return "Hola "+Nombre+ " Bienvenido a la pagina web";
}

//a= saludo("Alan");
console.log(saludo("Alan"));

//SUMA CON RTURN
function Suma_Return(N1,N2) {
    return N1+N2;
}
console.log(Suma_Return(5,5));

function numeroMayor(Number1,Number2) {
    if(Number1>Number2){
    return Number1;
    }return Number2;
}
let Number1=17;
let Number2=16;
let Numberr3=14;
maximo =numeroMayor(Number1,Number2);
maximo=numeroMayor(maximo,Numberr3);
console.log(maximo);