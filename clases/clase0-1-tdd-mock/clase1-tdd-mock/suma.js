// const suma = (numero1, numero2) => {
//     if(!numero1 || !numero2) return 0
//     if(typeof numero1 !== 'number' || typeof numero2 !== 'number') return null
//     const total = numero1 + numero2
//     return total
// }

// const suma = (...numeros) => {
//     if(numeros.length === 0) return 0
//     // 1, '2'
//     let validInput = true
//     for (let i = 0; i < numeros.length && validInput; i++) {
//         if(typeof numeros[i] !== 'number'){
//             validInput=false
//         }        
//     }
//     if(!validInput) return null
//     let result = 0
//     for (let i = 0; i < numeros.length; i++) {
//         result += numeros[i]        
//     }
//     return result
// }


const suma = (...numeros) => {
    if(numeros.length === 0) return 0
    if(!numeros.every(numero => typeof numero === 'number')) return null
    return numeros.reduce((sumaTotal, numero) => sumaTotal + numero, 0)
}




let testPasados = 0
let numeroTest  = 4

// 1 test

console.log('____________________________________________________________________________')
console.log("TEst 1: la función debe devolver null si algún parámetro es no  númerico")
let reusultTest1 = suma(2, "2")
if(reusultTest1 === null){
    console.log('test1 paso')
    testPasados++
}else console.log(`Test 1 no paso, se recibió ${typeof reusultTest1}, pero se esperaba null`)

console.log('____________________________________________________________________________')
console.log("TEst 2: la función debe devolver 0 si no se pasó ningún parámetro")
let reusultTest2 = suma()
if(reusultTest2 === 0){
    console.log('test 2 paso')
    testPasados++
}else console.log(`Test 2 no paso, se recibió ${reusultTest1}, pero se esperaba 0`)
console.log('____________________________________________________________________________')
console.log("TEst 3: la función debe resolver correctamente")
let reusultTest3 = suma(2,5)
if(reusultTest3 === 7){
    console.log('test 3 paso')
    testPasados++
}else console.log(`Test 3 no paso, se recibió ${reusultTest3}, pero se esperaba 7`)
console.log('____________________________________________________________________________')
console.log("TEst 4 la función debe resolver cuando se pasa mnas de dos números")
let reusultTest4 = suma(1,2,3,4,5)
if(reusultTest4 === 15){
    console.log('test 4 paso')
    testPasados++
}else console.log(`Test 2 no paso, se recibió ${reusultTest1}, pero se esperaba 15`)

console.log(`Se paso ${testPasados} de ${numeroTest} test`)
