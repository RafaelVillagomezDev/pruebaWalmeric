// Escribe una función que recibe un objeto persona como parámetro y
// devuelve otro objeto persona con solo su nombre y edad .
const persona = {
  name: 'John',
  surname: 'Doe',
  age: '30',
  country: 'Spain',
  city: 'Madrid',
  employed: 'true',
  dni: '00000000A',
}
//Opcion 1//
function newPersona(persona) {
  return {
    name: persona['name'],
    age: persona['age'],
  }
}

//Opcion 2 //
// function newPersona(persona) {
//   const valoresPersona = Object.fromEntries(
//     Object.entries(persona).filter(([key]) => key == 'name' || key == 'age'),
//   )

//   return  Object.assign(valoresPersona)
//
// }

console.log(newPersona(persona))
