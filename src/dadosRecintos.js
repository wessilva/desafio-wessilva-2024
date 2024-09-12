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

export { recintosDisponiveis };
