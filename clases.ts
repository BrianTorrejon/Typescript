class Vehiculo {
    private readonly marca: string;
    private modelo: number;
    private color: string;
    private precio: string;

    constructor(marca: string, modelo: number, color: string, precio: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.precio = precio;
    }

    /*     constructor(private marca: string, private modelo: number, private color: string) {
        otra forma de definir constructor,
        los atributos de arriba se borran
        } */

    drive() {
        //this.brandName ="yamaha" <-- no se puede, atributi solo lectura readonly
        console.log(`conduciendo un ${this.marca}, modelo: ${this.modelo}, color: ${this.color}`);
    }

    get getPrecio() {
        return this.precio;
    }

    set setPrecio(newPrecio: string) {
        this.precio = newPrecio;
    }
}

class Auto extends Vehiculo {
    private ruedas: number;

    constructor(marca: string, modelo: number, color: string, precio: string, ruedas: number) {
        super(marca, modelo, color, precio) //super
        this.ruedas = ruedas;
    }

    drive(): void {
        console.log("Conduciendo auto")
    }
}

//MAIN
const auto = new Vehiculo("toyota", 2014, "negro", "200.000");
auto.drive();
//auto.marca = "yamaha"; <-- no se puede, atributo privado

console.log(auto.getPrecio)
auto.setPrecio = "250.000";
console.log(auto.getPrecio)

const auto2 = new Auto("fiat", 2001, "rojo", "50.000", 4)
auto2.drive();