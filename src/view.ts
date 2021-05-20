import { DataInterface } from "./model";
import { AnswersMainInterface } from "./model";

export class View {
	container: HTMLElement;
	containerQuestions: HTMLElement;
	containerAnswers: HTMLElement;
	constructor() {
		this.container = this.createElement("div", "container");
		this.containerQuestions = this.createElement("div", "container-questions");
		this.containerAnswers = this.createElement("div", "container-answers");
		document.body.append(this.container);
		this.container.append(this.containerQuestions, this.containerAnswers);
	}
	// renderTastks(arr: any) {
	// 	arr.forEach((data: DataInterface) => {
	// 		this.createTaskContainer(data);
	// 	});
	// }
	renderQuestions(data: DataInterface[]): void {
		const title = this.createElement(
			"h2",
			"question-title",
			`${data[0].title}`,
		);
		const img = this.createElement("img", "question-img");
		img.setAttribute("src", `${data[0].imageUrl}`);
		img.setAttribute("alt", `picture`);
		this.containerQuestions.append(title, img);
	}
	renderAnswers(data: AnswersMainInterface): void {
		for (let i = 0; i < data.question1.length; i++) {
			const titleBox = this.createElement(
				"p",
				"answer-title",
				data.question1[i].title,
			);
			const img = this.createElement("img", "answer-img");
			img.setAttribute("src", `${data.question1[i].image}`);
			img.setAttribute("alt", `picture`);
			this.getElement(".container-answers")?.append(titleBox, img);
		}
	}
	createElement = (tag: string, cl?: string, text?: string) => {
		const element: HTMLElement = document.createElement(tag);
		if (cl) element.className = cl;
		if (text) element.textContent = text;
		return element;
	};
	getElement = (selector: string) => {
		const element = document.querySelector(selector);
		return element;
	};
}
