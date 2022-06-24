// Escribe una función que recibe un objeto persona como parámetro y
// devuelve todas sus propiedades menos employed y dni .
// Ejemplo de objeto persona:
const persona = {
  name: 'John',
  surname: 'Doe',
  age: '30',
  country: 'Spain',
  city: 'Madrid',
  employed: 'true',
  dni: '00000000A',
}

function getPersona(persona) {
  //Primero con ObjectEntries convertimos nuestro obj en una matriz con clave y valores
  //Lo segundo usamos filter para que me devuelva un array con las claves a buscar
  // Finalmente convertimos nuestro array o lista en un objeto con clave y valores
  return Object.fromEntries(
    Object.entries(persona).filter(
      ([key]) => key != 'employed' && key != 'dni',
    ),
  )
}

console.log(getPersona(persona))
