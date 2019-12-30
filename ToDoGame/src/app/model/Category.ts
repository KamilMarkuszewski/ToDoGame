export enum CategoryEnum {
    CarieerFinances = 1,
    FitnessHealth = 2,
    Reading = 3,
    Learining = 4
}

export class Category {
    constructor(
        public id: number,
        public name: string
      ) { }
}


export const CategoriesRepo : Category[] = [
    {id: 1, name: "Carieer and finances "},
    {id: 2, name: "Fitness and health " },
    {id: 3, name: "Reading " },
    {id: 4, name: "Learining " }
  ];