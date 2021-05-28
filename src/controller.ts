import { Questions } from "./model";
import { Model } from "./model";
import { View } from "./view";
export class Controller {
   questions: Questions;
   model: Model;
   view: View;
   i: number;
   constructor(view: View, model: Model, questions: Questions) {
      this.view = view;
      this.model = model;
      this.questions = questions;
      this.i = 0;
      this.handlePages();
   }
   handlePages = () => {
      this.view.renderQuestions(this.questions.getQuestions(), this.i);
      this.view.renderAnswers(this.model.getData(), this.i);
      const btnLeft = this.view.getElement(".btn-left");
      const btnRight = this.view.getElement(".btn-rigth");
      btnLeft?.addEventListener("click", () => {
         this.i--;
         if (this.i < 0) {
            this.i = 3;
         }
         this.view.removeItems();
         this.view.renderQuestions(this.questions.getQuestions(), this.i);
         this.view.renderAnswers(this.model.getData(), this.i);
      });
      btnRight?.addEventListener("click", () => {
         this.i++;
         if (this.i > 3) {
            this.i = 0;
         }
         this.view.removeItems();
         this.view.renderQuestions(this.questions.getQuestions(), this.i);
         this.view.renderAnswers(this.model.getData(), this.i);
      });
   };
}
