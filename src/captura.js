import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const animaisValidos = {
  MACACO: { tamanho: 1, biomas: ["SAVANA", "FLORESTA"] },
  CROCODILO: { tamanho: 3, biomas: ["RIO"] },
  LEAO: { tamanho: 4, biomas: ["SAVANA"] },
  HIPOPOTAMO: { tamanho: 5, biomas: ["SAVANA", "RIO"] },
  GAZELA: { tamanho: 2, biomas: ["SAVANA"] },
  LEOPARDO: { tamanho: 2, biomas: ["SAVANA"] },
};

const recintosDisponiveis = [
    { id: 1, bioma: 'SAVANA', espacoLivre: 5, tamanhoTotal: 10 },
    { id: 2, bioma: 'FLORESTA', espacoLivre: 3, tamanhoTotal: 8 },
    { id: 3, bioma: ['SAVANA' , 'FLORESTA'], espacoLivre: 7, tamanhoTotal: 15 },
    { id: 4, bioma: 'RIO', espacoLivre: 4, tamanhoTotal: 12 },
    { id: 5, bioma: 'SAVANA', espacoLivre: 6, tamanhoTotal: 9 },
  ];

function encontrarRecintosViaveis(especie, quantidade) {
  const especieInfo = animaisValidos[especie];
  if (!especieInfo) {
    console.log(`Espécie ${especie} não é válida.`);
    return [];
  }
  const { tamanho, biomas } = especieInfo;
  return recintosDisponiveis.filter(recinto => 
    biomas.includes(recinto.bioma) && recinto.espacoLivre >= (tamanho * quantidade)
  );
}

function perguntarEspecie() {
  return new Promise((resolve) => {
    rl.question('Digite a espécie: ', (especie) => {
      resolve(especie.toUpperCase());
    });
  });
}

function perguntarQuantidade() {
  return new Promise((resolve) => {
    rl.question('Digite a quantidade (maior que 0): ', (quantidade) => {
      resolve(parseInt(quantidade, 10));
    });
  });
}

async function main() {
  const especie = await perguntarEspecie();
  const quantidade = await perguntarQuantidade();
  const recintosViaveis = encontrarRecintosViaveis(especie, quantidade);

  if (recintosViaveis.length > 0) {
    console.log(`Recintos viáveis para ${quantidade} ${especie}(s):`);
    recintosViaveis.forEach(recinto => {
      console.log(`Recinto ${recinto.id} (Bioma: ${recinto.bioma}, Espaço Livre: ${recinto.espacoLivre} Tamanho: ${recinto.tamanhoTotal})`);
    });
  } else {
    console.log(`Nenhum recinto viável encontrado para ${quantidade} ${especie}(s).`);
  }

  rl.close();
}

main();