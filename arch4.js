function sumar(a,b){
    return a + b
}

function restar(a,b){
    return a - b
}
function dividir(a,b){
    return a / b
}

function calculadora(numeroA, numeroB, operacion){ 

    return operacion(numeroA,numeroB)

}

console.log(calculadora(230,50,restar))