import { recintosDisponiveis } from "./dadosRecintos.js";
import { Animal, Recinto } from "./models.js";

class RecintosZoo {
  constructor() {
    this.recintos = recintosDisponiveis.map(
      (recinto) =>
        new Recinto(
          recinto.numero,
          recinto.tamanho,
          recinto.bioma,
          recinto.animais
        )
    );
  }

  

  analisaRecintos(especie, quantidade) {
    const animaisValidos = {
      MACACO: { tamanho: 1, biomas: ["SAVANA", "FLORESTA"] },
      CROCODILO: { tamanho: 3, biomas: ["RIO"] },
      LEAO: { tamanho: 4, biomas: ["SAVANA"] },
      HIPOPOTAMO: { tamanho: 5, biomas: ["SAVANA", "RIO"] },
      GAZELA: { tamanho: 2, biomas: ["SAVANA"] },
      LEOPARDO: { tamanho: 2, biomas: ["SAVANA"] },
    };

    if (!animaisValidos[especie]) {
      return { erro: "Animal inválido", recintosViaveis: null };
    }
    if (quantidade <= 0) {
      return { erro: "Quantidade inválida", recintosViaveis: null };
    }

    const animal = new Animal(
      especie,
      animaisValidos[especie].tamanho,
      animaisValidos[especie].biomas
    );
    const recintosViaveis = [];
    const animaisAdicionados = [];
    
    for (const recinto of recintosDisponiveis) {
        if (recinto.podeAdicionarAnimal(animal, quantidade)) {
            recinto.adicionarAnimal(animal, quantidade); 
            animaisAdicionados.push({ recinto: recinto.numero, especie: animal.especie, quantidade: quantidade });
            recintosViaveis.push(recinto.toString())
        }
    }


    

    if (recintosViaveis.length === 0) {
      return { erro: "Não há recinto viável", recintosViaveis: null };
    }

    
      
    

    return {
      erro: null,
      recintosViaveis: recintosViaveis,
      animaisAdicionados: animaisAdicionados, 
    };
  }
}
export { RecintosZoo as RecintosZoo };
