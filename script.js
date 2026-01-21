// Solicito números al usuario
let num1 = Number(prompt("Ingresa el primer número"));
let num2 = Number(prompt("Ingresa el segundo número"));
let num3 = Number(prompt("Ingresa el tercer número"));

// Guardo los datos en un arreglo
let numeros = [num1, num2, num3];

// Verificar si los tres números son iguales
if (num1 === num2 && num2 === num3) {
    console.log("Los números son iguales:", numeros.join(", "));
} else {
    // Ordenar de mayor a menor
    let mayorAMenor = [...numeros].sort((a, b) => b - a);
    
    // Ordenar de menor a mayor
    let menorAMayor = [...numeros].sort((a, b) => a - b);

    console.log("De mayor a menor:", mayorAMenor.join(", "));
    console.log("De menor a mayor:", menorAMayor.join(", "));
}