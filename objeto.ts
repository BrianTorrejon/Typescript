/* let persona: object = {
    nombre: "Juan",
    edad: 34
}

console.log(persona.nombre)  no funciona */


// INDICAR LAS PROPIEDADES QUE EXISTEN DENTRO DEL OBJETO
let persona: { nombre: string, edad: number } = {
    nombre: "Juan",
    edad: 34
}

console.log(persona.nombre)


//objetos anidados

let gato: {
    nombre: string,
    edad: number
    direccion: {
        calle: string,
        altura: number
    }
} = {
    nombre: "Snowball",
    edad: 7,
    direccion: {
        calle: "Av. Libertador",
        altura: 1500
    }
}

console.log(gato)