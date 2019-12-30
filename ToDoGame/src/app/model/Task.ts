export class Task {
    constructor(
        public id: number,
        public name: string,        
        public description: string,
        public done: boolean = false,
        public experience: number
      ) { }
}

export const TasksRepo: Task[] = [
    {
        id: 1,
        name: "Learn english",
        description: "Daily task to spend 15 minutes reading/watching something in english",
        done: false,
        experience: 10
    },
    {
        id: 2,
        name: "Learn something new",
        description: "Daily task to spend 15 minutes to learn about something",
        done: false,
        experience: 10
    },
    {
        id: 3,
        name: "Make something good",
        description: "Make sure you did something good for someone.",
        done: false,
        experience: 10
    },
    {
        id: 4,
        name: "Make dinner",
        description: "",
        done: false,
        experience: 5
    }
  ]
