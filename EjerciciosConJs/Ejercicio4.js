let numeros = [5, 8, 9, 3, 7, 4, 4, 7, 5];
//obtener la suma de todos los valores
let suma = 0;
for (let i = 0; i < numeros.length; i++) {

    suma = numeros[i] + suma;
}
console.log(suma)
console.log("-------------------------------------------------------------------------------")
//--------------------------------------------------------------------------------------//
//Arreglos grupo 1 y grupo 2
let grupo1 = [10, 8, 9, 5, 0, 4, 2, 7, 5, 5, 10]; //SUMA TOTAL 65/11= 5.9
let grupo2 = [0, 7, 10, 2, 0, 3, 10, 10, 10, 10, 10]; //SuMA TOTAL 72/11= 6.5
let escuela = [
    grupo1,
    grupo2
];
//para grupo 1
let promedio = 0;
let moda = 0;
let suma_Promedio = 0;
//para grupo 2
let promedio_grupo2 = 0;
let media_grupo2;
let suma_grupo2 = 0;
//let tuputamadre=0;
for (let edificio = 0; edificio < escuela.length; edificio++) {
    let grupo = escuela[edificio];
    console.log("Estas son las calificaciones del grupo " + (edificio + 1));
    for (let alumno = 0; alumno < grupo.length; alumno++) {
        let calAlumno = grupo[alumno];
        //suma_Promedio= grupo[alumno]+suma_Promedio;
        // tuputamadre=grupo1.length+tuputamadre
        console.log("El alumno " + alumno + " tiene " + calAlumno);
    }

}

console.log("*****PROMEDIO*****");
for (let g1 = 0; g1 < grupo1.length; g1++) {
    suma_Promedio = grupo1[g1] + suma_Promedio;
    promedio = suma_Promedio / grupo1.length;
}
console.log("El promedio del grupo 1 es de: " + promedio);

for (let g2 = 0; g2 < grupo2.length; g2++) {
    suma_grupo2 = grupo2[g2] + suma_grupo2;
    promedio = suma_grupo2 / grupo2.length;
}
console.log("El promedio del grupo 2 es de: " + promedio);

