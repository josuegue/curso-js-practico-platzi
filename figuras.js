//Codigo del cuadrado, el .group del console me sirve para agrupar codigo
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Lado del cuadrado mide: "+ladoCuadrado+"cm");

const perimetroCuadrado = ladoCuadrado*4;

console.log("El perimetro del cuadrado es: "+perimetroCuadrado+"cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El area del cuadrado es: "+areaCuadrado+"cm^2");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 4;
const ladoTriangulo2 = 5;
const baseTriangulo = 7;
const alturaTriangulo = 8;
console.log("Lado del triangulo mide: "
+ladoTriangulo2+"cm, "
+ladoTriangulo1+"cm, "
+baseTriangulo+"cm");
console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = value *4;
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = value *value;
    alert(area);
}


