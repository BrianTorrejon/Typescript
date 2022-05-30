let hobbies: string[];
//let hobbies: string[] = ["Guitarra", "Futball", "Correr"];  tambien se puede hacer de esta forma
hobbies = ["Guitarra", "Futball", "Correr"]
//hobbies = ["Guitarra", "Futball", 1 , false] <-- ERROR 

console.log(hobbies)

let cualquierTipoDato : any[]
cualquierTipoDato = ["Futball", 1 , false] 

console.log(cualquierTipoDato)

for (let hobbie of hobbies){
    console.log(hobbie.toLocaleUpperCase())
}