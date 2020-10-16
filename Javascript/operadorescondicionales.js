//Operadores condicionales

let edad = 29
let masde18
//Este es un if
if (edad < 18) {
    console.log("No drink")
    masde18 = false
} else {
    console.log("Salud")
    masde18 = true
} 

console.log(masde18)
//Operador Ternario (if pequeño)
masde18 = (edad < 18) ? false : true

console.log(masde18)