// Escribe una función que recibe una string como parámetro y
// devuelve true si es un palíndromo o false en caso contrario.
const cadena = 'Sometamos o matemos'
function isPalindromo(parametro) {
  //Comprobamos que es un string
  if (typeof parametro == 'string') {
    //Quitamos espacios en blanco y lo pasamos a minusculas
    const cadena = parametro.toLowerCase().replace(/\s/g, '')
    //Ordenamos al reves y unicmos valores mediante joint
    const palindromo = cadena.split('').reverse().join('')
    if (palindromo == cadena) {
      return true
    } else {
      return false
    }
  } else {
    console.log('No es una cadena de strings ')
    return false
  }
}

console.log(isPalindromo(cadena))
