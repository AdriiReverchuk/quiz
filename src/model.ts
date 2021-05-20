export interface ModelInterface {
   getData: () => AnswersMainInterface[];
}
export interface DataInterface {
   id: number;
   title: string;
   imageUrl: string | number;
}

export interface AnswersInterface {
   id: number;
   title: string;
   image: string | number;
   isRight: boolean;
}

export interface AnswersMainInterface {
   question1: AnswersInterface[];
   question2: AnswersInterface[];
   question3: AnswersInterface[];
   question4: AnswersInterface[];
}

export class Questions {
   private questions: DataInterface[];
   constructor() {
      this.questions = [
         {
            id: 1,
            title: "How many legs has cat?",
            imageUrl: "https://cats.com",
         },
         {
            id: 2,
            title: "How many legs has dog?",
            imageUrl: "https://cats.com",
         },
         {
            id: 3,
            title: "How many legs has dinosaurs?",
            imageUrl: "https://cats.com",
         },
         {
            id: 4,
            title: "How many legs has elephant?",
            imageUrl: "https://cats.com",
         },
      ];
   }
}

export class Model {
   private data: AnswersMainInterface;
   id: number;
   constructor(id: number) {
      this.id = id;
      this.data = {
         question1: [
            {
               id: 1,
               title: "How many",
               image: "https://image.com",
               isRight: true,
            },
            {
               id: 2,
               title: "How many",
               image: "https://image.com",
               isRight: false,
            },
            {
               id: 3,
               title: "How many",
               image: "https://image.com",
               isRight: false,
            },
            {
               id: 4,
               title: "How many",
               image: "https://image.com",
               isRight: false,
            },
         ],
         question2: [
            {
               id: 1,
               title: "How many",
               image: "https://image.com",
               isRight: true,
            },
            {
               id: 2,
               title: "How many",
               image: "https://image.com",
               isRight: false,
            },
            {
               id: 3,
               title: "How many",
               image: "https://image.com",
               isRight: false,
            },
            {
               id: 4,
               title: "How many",
               image: "https://image.com",
               isRight: false,
            },
         ],
         question3: [
            {
               id: 1,
               title: "How many",
               image: "https://image.com",
               isRight: true,
            },
            {
               id: 2,
               title: "How many",
               image: "https://image.com",
               isRight: false,
            },
            {
               id: 3,
               title: "How many",
               image: "https://image.com",
               isRight: false,
            },
            {
               id: 4,
               title: "How many",
               image: "https://image.com",
               isRight: false,
            },
         ],
         question4: [
            {
               id: 1,
               title: "How many",
               image: "https://image.com",
               isRight: true,
            },
            {
               id: 2,
               title: "How many",
               image: "https://image.com",
               isRight: false,
            },
            {
               id: 3,
               title: "How many",
               image: "https://image.com",
               isRight: false,
            },
            {
               id: 4,
               title: "How many",
               image: "https://image.com",
               isRight: false,
            },
         ],
      };
      console.log(this.data);
   }
   getData() {
      return this.data;
   }
}
