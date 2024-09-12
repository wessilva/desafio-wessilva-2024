class Animal {
    constructor(especie, tamanho, biomas) {
      this.especie = especie;
      this.tamanho = tamanho;
      this.biomas = biomas;
    }
  }
  // Classe que representa um Recinto
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
      // animal = animal.toUpperCase();
      // if (animal === "CROCODILO") {
      //   animal = animaisValidos.CROCODILO;
      // } else if (animal === "MACACO") {
      //   animal == animaisValidos.MACACO;
      // }
      // else if
      //else if
      if (!animal.biomas.some(bioma => this.bioma.includes(bioma))) {
        return false;
      }
      if (this.espacoLivre < animal.tamanho * quantidade) {
        return false;
      }
  
      const especiesExistentes = this.animaisExistentes.map((a) => a.especie);
      // if (animal.especie === "CARNIVORO" && especiesExistentes.length > 0) {
      //   return false;
      // }
      // if (especiesExistentes.includes("CARNIVORO")) {
      //   return false;
      // }
      if (animal.especie === "CROCODILO" && especiesExistentes.includes("GAZELA")) {
        return false;
      }
      if (
        animal.especie === "HIPOPOTAMO" &&
        this.bioma !== "SAVANA" &&
        this.bioma !== "RIO"
      ) {
        return false;
      }
      if (
        animal.especie === "MACACO" &&
        (especiesExistentes.length === 1 || quantidade === 1)
      ) {
        return false;
      }
      // if (
      //   animal.especie === "MACACO" &&
      //   this.bioma === "SAVANA" &&
      //   this.bioma === "RIO"
      // ) {
      //   return true;
      // }
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
        console.error("Erro: tamanhoAnimal é inválido", tamanhoAnimal);
        return;
      }
      if (adicionar) {
        this.espacoLivre -= tamanhoAnimal;
      } else {
        this.espacoLivre += tamanhoAnimal;
      }
      return this.espacoLivre;
    }
  
    calculaEspacoLivre() {
      return this.espacoLivre;
    }
  
    toString() {
      return `Recinto ${this.numero} (espaço livre: ${this.espacoLivre} total: ${this.tamanhoTotal})`;
    }
  }
  
  // Exporta as classes Animal e Recinto para serem usadas em outros módulos
  export { Recinto, Animal };
  