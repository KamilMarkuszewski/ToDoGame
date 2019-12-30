export class Hero {
    constructor(
        public id: number,
        public name: string,      
        public email: string,   

        public level: number,
        public experience: number,
        public nextLevelExperience: number,

        public strength: number,
        public intelligence: number,
        public charisma: number
      ) { }
}

export const HeroRepo = 
    {
        hero: 
            new Hero(
                1,
                "userName",
                "someEmail",
                1,
                23,
                50,
                1,
                1,
                1
            )
    };
  
