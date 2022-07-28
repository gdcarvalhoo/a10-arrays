// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
const listaOriginal = ["milho","ervilha","batata","cenoura"]
const comidaOriginal = ["hot dog","seleta","salada","gororoba"]
const animaisOriginal = ["Cachorro","Gato","Pato","Armadillo on foot"] // kekw
// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
let listaCopia = listaOriginal.slice()
console.log(listaOriginal)
listaCopia.push(`6`)
console.log(listaCopia)
// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
let comidaCopia = comidaOriginal.slice()
console.log(comidaOriginal)
comidaCopia.pop()
console.log(comidaCopia)
// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
let animaisCopia = animaisOriginal.slice()
console.log(animaisOriginal)
animaisCopia.splice(1,1)
console.log(animaisCopia)