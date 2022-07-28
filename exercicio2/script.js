// # Exercício 2

// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

const arrayUm = [1, 2, 5, 7, 9, 0]
const arrayDois = ["Aatrox","Ashe","Amumu","A.Sol","Nidalinda"]
const arrayTres = [1,2,5,8,7,"nidalinda","batatinha","feijoada",true,false]
console.log(arrayUm)
console.log(arrayDois)
console.log(arrayTres)
// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(arrayUm.length)
console.log(arrayDois.length)
console.log(arrayTres.length)
// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(arrayUm[0])
console.log(arrayDois[1])
console.log(arrayTres[2])

// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
console.log(arrayUm.includes(0))
console.log(arrayTres.includes("A.Sol"))