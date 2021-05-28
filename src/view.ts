import { DataInterface } from "./model";
import { AnswersMainInterface } from "./model";
import { AnswersInterface } from "./model";

export class View {
   container: HTMLElement;
   containerQuestions: HTMLElement;
   containerCorrectAnswer: HTMLElement;
   containerAnswers: HTMLElement;
   btnContainer: HTMLElement;
   btnLeft: HTMLElement;
   btnRight: HTMLElement;
   constructor() {
      this.container = this.createElement("div", "container");
      this.containerQuestions = this.createElement(
         "div",
         "container-questions alert alert-primary mt-5"
      );
      this.containerCorrectAnswer = this.createElement(
         "div",
         "container-correct"
      );
      this.containerAnswers = this.createElement("div", "container-answers");
      this.btnContainer = this.createElement("ul", "btn-container");
      this.btnLeft = this.createElement(
         "li",
         "btn-left",
         `<a><i class="fas fa-arrow-left"></i></a>`
      );
      this.btnRight = this.createElement(
         "li",
         "btn-rigth",
         `<a><i class="fas fa-arrow-right"></i></a>`
      );
      this.btnContainer.append(this.btnLeft, this.btnRight);

      document.body.append(this.container, this.btnContainer);
      this.container.append(
         this.containerQuestions,
         this.containerCorrectAnswer,
         this.containerAnswers
      );
   }
   // renderTastks(arr: any) {
   // 	arr.forEach((data: DataInterface) => {
   // 		this.createTaskContainer(data);
   // 	});
   // }
   renderQuestions(data: DataInterface[], i: number): void {
      const title = this.createElement(
         "h2",
         "question-title",
         `${data[i].title}`
      );
      const img = this.createElement("img", "question-img");
      img.setAttribute("src", data[i].imageUrl);
      img.setAttribute("alt", `picture`);
      this.containerQuestions.append(title, img);
   }
   renderAnswers(data: AnswersMainInterface, i: number): void {
      let arr: AnswersInterface[] = [];

      switch (i) {
         case 0:
            arr = data.question1;
            break;
         case 1:
            arr = data.question2;

         case 2:
            arr = data.question3;
            break;
         case 3:
            arr = data.question4;
            break;
      }
      for (let i = 0; i < arr.length; i++) {
         const answersDiv = this.createElement(
            "div",
            "answer-div card text-white bg-dark-500 mb-3"
         );
         const titleBox = this.createElement(
            "p",
            "answer-title card-text",
            arr[i].title
         );
         const img = this.createElement("img", "answer-img card-img-top");
         img.setAttribute("src", arr[i].image);
         img.setAttribute("alt", `picture`);
         answersDiv.append(titleBox, img);
         this.getElement(".container-answers")?.append(answersDiv);

         answersDiv.addEventListener("click", (event) => {
            const arrayQuestion = document.querySelectorAll(".answerTrue");
            if (arrayQuestion) {
               for (let i = 0; i < arrayQuestion.length; i++) {
                  arrayQuestion[i].remove();
               }
            }
            if (data.question1[i].isRight === true) {
               const answerTrue = this.createElement(
                  "div",
                  "answerTrue alert alert-success fs-3"
               );
               const titleAnswer = this.createElement(
                  "p",
                  "titleAnswer",
                  "You have guessed !"
               );
               answerTrue.append(titleAnswer);
               this.getElement(".container-correct")?.append(answerTrue);
            } else {
               const answerTrue = this.createElement(
                  "div",
                  "answerTrue alert alert-danger fs-4"
               );
               const titleAnswer = this.createElement(
                  "p",
                  "titleAnswer",
                  "The answer is not true !"
               );
               answerTrue.append(titleAnswer);
               this.getElement(".container-correct")?.append(answerTrue);
            }
         });
      }
   }
   removeItems = () => {
      const firstItem = this.getElement(".question-title");
      const secondItem = this.getElement(".answerTrue");
      const thirthItem = this.getElement(".answer-div");
      if (secondItem) {
         this.containerCorrectAnswer.innerHTML = "";
      }
      if (firstItem && thirthItem) {
         this.containerAnswers.innerHTML = "";
         this.containerQuestions.innerHTML = "";
      }
   };
   createElement = (tag: string, cl?: string, text?: string) => {
      const element: HTMLElement = document.createElement(tag);
      if (cl) element.className = cl;
      if (text) element.innerHTML = text;
      return element;
   };
   getElement = (selector: string) => {
      const element = document.querySelector(selector);
      return element;
   };
}
