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
  const newObj = {
    name: persona['name'],
    age: persona['age'],
  }

  return newObj
}

//Opcion 2 //
// function newPersona(persona) {
//   const valoresPersona = Object.fromEntries(
//     Object.entries(persona).filter(([key]) => key == 'name' || key == 'age'),
//   )

//   const newObj = Object.assign(valoresPersona)
//   return newObj
// }

console.log(newPersona(persona))
