import { CategoryEnum } from '../model/Category';

export class Goal {
    constructor(
        public id: number,
        public name: string,        
        public description: string,
        public done: boolean = false,
        public experience: number,
        public category: CategoryEnum
      ) { }
}

export const GoalsRepo: Goal[] = [
    {
        id: 1,
        name: "Finish english B2 exam",
        description: "",
        done: false,
        experience: 999,
        category: CategoryEnum.Learining
    },
    {
        id: 2,
        name: "Make 25 pushups in a row",
        description: "",
        done: false,
        experience: 200,
        category: CategoryEnum.FitnessHealth
    },
    {
        id: 3,
        name: "Read Forrest Gump",
        description: "",
        done: false,
        experience: 200,
        category: CategoryEnum.Reading
    },
    {
        id: 4,
        name: "Talk with you leader about raise",
        description: "",
        done: false,
        experience: 5,
        category: CategoryEnum.CarieerFinances
    }
  ]
