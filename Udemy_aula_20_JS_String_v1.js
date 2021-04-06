const escola = "cod3r"

console.log(escola.charAt(4))
console.log(escola.charCodeAt(3))
console.log(escola.charCodeAt(1))
console.log(escola.charAt(1))

console.log(escola.substring(2))
console.log(escola.substring(0,2))

console.log("Escola ".concat(escola).concat('!'))
console.log(escola.replace(3,'e'))      //substitui o 3º caractere
console.log(escola.replace(/\d/,"e"))
console.log(escola.replace(/\w/,'e'))   //substitui o 1º caractere
console.log(escola.replace(/\w/g,'e'))  //substitui todos os caracteres por e.

console.log("Pedro, Ana, Rafael, Samuel".split(',')) //converter a string em array.