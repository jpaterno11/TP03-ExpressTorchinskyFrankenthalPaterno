const PI = 3.14;
const array = ["dos", "cuatro", "ocho", "diez"];
function sumar(x, y) {
let sumar = x + y;
return sumar;
}
function restar(x, y) {
    let restar = x - y;
    return restar;
    }
const multiplicar = (a, b) => {
    let multiplicar = a * b;
    return multiplicar;};
const dividir = (a, b) => {
    let dividir = a / b;
    return dividir;};
const mostrarArray = () => {
    array.forEach(number => {
        console.log(number);
    });
    };
export {PI, sumar, multiplicar, dividir, restar, mostrarArray};
