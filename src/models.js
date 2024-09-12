class Animal {
    constructor(especie, tamanho, biomas) {
      this.especie = especie;
      this.tamanho = tamanho;
      this.biomas = biomas;
    }
  }
  
  class Recinto {
    constructor(numero, bioma, tamanhoTotal, animaisExistentes) {
      this.numero = numero;
      this.bioma = Array.isArray(bioma) ? bioma: [];
      this.tamanhoTotal = tamanhoTotal;
      this.animaisExistentes = Array.isArray(animaisExistentes)
        ? animaisExistentes
        : [];
      this.espacoLivre = this.calculaEspacoLivreInicial();
    }
  
    calculaEspacoLivreInicial() {
      const espacoOcupado = this.animaisExistentes.reduce(
        (acc, animal) => acc + animal.tamanho,
        0
      );
      const result = this.tamanhoTotal - espacoOcupado;
      return result;
    }
  
    podeAdicionarAnimal(animal, quantidade) {
      
      const especiesExistentes = this.animaisExistentes.map((a) => a.especie);
      if (animal.especie === "CROCODILO" && this.numero !== 4) {
        return false;
      }
      if (animal.especie === "CROCODILO" && especiesExistentes.includes("GAZELA")) {
        return false;
       }
       if (animal.especie === "MACACO" && this.bioma.length === 1 && this.bioma.includes("RIO")) {
        return false;
      }
  
      if (animal.especie === "MACACO" && especiesExistentes.includes("LEAO")) {
        return false;
      }
       
      if (
        animal.especie === "MACACO" &&
        !this.bioma.includes("SAVANA") ||
        !this.bioma.includes("FLORESTA")
      ) {
        return true;
      }

      if (
        animal.especie === "MACACO" &&
        this.bioma !== "SAVANA"
      ) {
        return false;
      }

      
      if (this.espacoLivre < animal.tamanho * quantidade) {
        return false;
        }


       if (
        animal.especie === "HIPOPOTAMO" &&
        this.bioma !== "SAVANA" &&
        this.bioma !== "RIO"
      ) {
        return false;
      }
     
      
      return true;
    }
  
    adicionarAnimal(animal, quantidade) {
      if (this.podeAdicionarAnimal(animal, quantidade)) {
        for (let i = 0; i <= quantidade; i++) {
          this.animaisExistentes.push(animal);
        }
  
        const tamanhoTotal = animal.tamanho * quantidade;
        if (!isNaN(tamanhoTotal) && tamanhoTotal > 0) {
          this.atualizaEspacoLivre(tamanhoTotal, true);
        } else {
          console.error("Erro: tamanhoTotal é inválido", tamanhoTotal);
        }
      }
      return this.animaisExistentes;
    }
  
    atualizaEspacoLivre(tamanhoAnimal, adicionar = true) {
      if (isNaN(tamanhoAnimal)) {
       return console.error("Erro: tamanhoAnimal é inválido", tamanhoAnimal);
        
      }
      if (adicionar) {
        this.espacoLivre -= tamanhoAnimal;
      } 
      return this.espacoLivre;
    }
  
    
  
    toString() {
      return `Recinto ${this.numero} (espaço livre: ${this.espacoLivre} total: ${this.tamanhoTotal})`;
    }
  }
  
  
  export { Recinto, Animal };
  