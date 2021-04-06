/**Operadores realacionais são binários.*/

console.log("01)",'1' == 1)
console.log('02)','1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('7)', 3 <= 2)
console.log('8)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)

console.log('09)', d1 === d2)   //Casos 09 e 10 referenciam endereço de memória e não valores alocados nos objetos.
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() == d2.getTime())
console.log('12)', d1.getTime() === d2.getTime())

console.log('13)', undefined == null)
console.log('14)', undefined === null)