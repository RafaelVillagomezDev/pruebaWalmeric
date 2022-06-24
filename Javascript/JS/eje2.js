//Escribe una función que recibe un array de números enteros como
//parámetro y devuelve todos los múltiplos de 7.

const numbers = [1, 'pepe', 4.2, 7, 7, 49, 23, 21, 12, 19, 5, 73, 63, 9, 14, 70]

//Opcion 1:
function multiplos(numbers) {
  //Eliminamos valores repetidos
  const arrayUnicos = new Set(numbers)
  const array = [...arrayUnicos]
  return array.filter((num) => num % 7 == 0)
}

//Opcion 2:
// function multiplos(numbers) {
//   //Comprobamos que es un array
//   if (Array.isArray(numbers)) {
//     // Array solo me devuelve Enteros
//     const arrayEnteros = numbers.filter((num) => num % 1 == 0)
//     //Eliminamos valores repetidos
//     //meter comentario
//     const arrayUnicos = new Set(arrayEnteros)
//     const array = [...arrayUnicos]
//     const multiplos = array.filter((num) => num % 7 == 0)
//     return multiplos
//   } else {
//     console.log('No es un array')
//     return false
//   }
// }

console.log(multiplos(numbers))
