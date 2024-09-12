import { Animal, Recinto } from "./models.js";

const recintosDisponiveis = [
  new Recinto(1, "SAVANA", 10, [
    new Animal("MACACO", 1, ["FLORESTA"]),
    new Animal("MACACO", 1, ["FLORESTA"]),
    new Animal("MACACO", 1, ["FLORESTA"]),
  ]),
  new Recinto(2, "FLORESTA", 5, []),
  new Recinto(3, ["SAVANA", "RIO"], 7, [
    new Animal("GAZELA", 2, ["SAVANA"])]),
  new Recinto(4, "RIO", 8, []),
  new Recinto(5, "SAVANA", 9, 
    [new Animal("LEAO", 3, ["SAVANA"])]),
];
// function analisaRecintos(especie, quantidade) {
//   const animaisValidos = {
//     MACACO: { tamanho: 1, biomas: ["FLORESTA", "SAVANA"] },
//     CROCODILO: { tamanho: 3, biomas: "RIO" },
//     LEAO: { tamanho: 4, biomas: ["SAVANA"] },
//     HIPOPOTAMO: { tamanho: 5, biomas: ["SAVANA", "RIO"] },
//     GAZELA: { tamanho: 2, biomas: ["SAVANA"] },
//     LEOPARDO: { tamanho: 2, biomas: ["SAVANA"] },
//   };

//   if (!animaisValidos[especie]) {
//     return { erro: "Animal inválido", recintosViaveis: null };
//   }
//   if (quantidade <= 0) {
//     return { erro: "Quantidade inválida", recintosViaveis: null };
//   }

//   const animal = new Animal(
//     especie,
//     animaisValidos[especie].tamanho,
//     animaisValidos[especie].biomas
//   );
//   const recintosViaveis = [];
//   const animaisAdicionados = [];

//   for (const recinto of recintosDisponiveis) {
//     if (recinto.podeAdicionarAnimal(animal, quantidade)) {
//       recintosViaveis.push(recinto);
//     }
//   }

//   if (recintosViaveis.length === 0) {
//     return { erro: "Não há recinto viável", recintosViaveis: null };
//   }

//   for (const recinto of recintosDisponiveis) {
//     if (recinto.podeAdicionarAnimal(animal, quantidade)) {
//       recinto.adicionarAnimal(animal, quantidade);
//       animaisAdicionados.push({
//         recinto: recinto.numero,
//         especie: animal.especie,
//         quantidade: quantidade,
//       });
//     }
//   }

//   return {
//     //erro: null,
//     recintosViaveis: recintosViaveis.map(
//       (recinto) =>
//         Recinto ${recinto.numero} (espaço livre: ${recinto.espacoLivre} total: ${recinto.tamanhoTotal})
//     ),
//     //animaisAdicionados: animaisAdicionados,
//   };

//const crocodilo = new Animal("CROCODILO", 3, ["RIO"]);
// console.log(recintosDisponiveis);
// console.log(recintosDisponiveis[0].animaisExistentes);
//console.log(recintosDisponiveis[3].adicionarAnimal(crocodilo, 1));
//console.log(analisaRecintos("CROCODILO", 1));
// console.log(recintosDisponiveis.analisaRecintos("MACACO", 2));
export { recintosDisponiveis };
