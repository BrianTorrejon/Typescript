

let auto : [string, number, string] = ["sedan", 1995, "rojo"];
//auto[1] = "1995"; <-- ERROR

type vehiculoType = [string, number, string] // restriccion para utilizarla en varias variables, tipo de dato personalizado. igualmentes es mejor con un objeto
let camion: vehiculoType = ["sprinter", 2004, "blanco"]
let camioneta: vehiculoType = ["hilux", 2014, "negro"]