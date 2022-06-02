function sumar(valor: number, valor2: number): number { //retorna dato tipo number
    return valor + valor2;
}

const sumarFlecha = (valor: number, valor2: number): number => {
    return valor + valor2;
}

const dividir = function (a: number, b: number): number {
    return a / b;
}

function imprimir() { //return void  ;; undefined espera return undefined
    console.log(sumar(2, 2))
    console.log(sumarFlecha(2, 2))
    console.log(dividir(2, 2))
}

imprimir();

let sumar2: (a: number, b: number) => number
sumar2 = sumar; //pasar funciones o referencias
//sumar2 = imprimir  --> error por estructura de la funcion.

console.log(sumar2(5, 5))

function imprimirFuncion(a: number, b: number, mostrar: (value: number) => void): void {
    let resultado = a + b;
    mostrar(resultado);
}

imprimirFuncion(7, 7, x => { console.log(x) }) //manera para enviar funcion mediante callback por medio de parametros.
