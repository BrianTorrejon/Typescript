let numero: string | number | boolean

type StringNumber = string | number

function analizo(num: StringNumber) {
    if (typeof num === "number") {
        return "soy un number : " + num;
    }

    if (typeof num === "string") {
        return "soy un string : " + num
    }
}

console.log(analizo(20))
console.log(analizo("20"))