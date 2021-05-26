import { Questions } from "./model";
import { Model } from "./model";
import { View } from "./view";
export class Controller {
	questions: Questions;
	model: Model;
	view: View;
	constructor(view: View, model: Model, questions: Questions) {
		this.view = view;
		this.model = model;
		this.questions = questions;
		this.view.renderQuestions(this.questions.getQuestions());
		this.view.renderAnswers(this.model.getData());
	}
}
