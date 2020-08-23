const objects = []

objects.push({
    id: 1,
    nome: 'isaac'
})

objects.push({
    id: 2,
    nome: 'aaissa'
})
objects.push({
    id: 3,
    nome: 'raissa'
})



for (object of objects) {
    console.log(object.nome)
        //console.log(objects.nome)
    var ultimo = object.id - 1
    var Nome = object.nome

}
console.log((Nome.length))

console.log(ultimo)
for (i = 0; i < objects.length; i++) {
    var indice = i + 1
}
console.log('\n\n' + indice)



// for (object in objects) {
//     console.log(object)
// }
// console.log(objects.pop())
// console.log('Total: ' + objects.length)

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']

//Varredura para achar o último item do array (frutas.length - 1)

for (var item = 0; item < frutas.length; item++) {
    if (frutas[item] === frutas[frutas.length - 1]) {
        var ultimaFruta = frutas[item]
        console.log(ultimaFruta)
    }
}