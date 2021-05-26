export interface ModelInterface {
	getData: () => AnswersMainInterface[];
}

export interface DataInterface {
	id: number;
	title: string;
	imageUrl: string;
}

export interface AnswersInterface {
	id: number;
	title: string;
	image: string;
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
				imageUrl: "./cat.jpg",
			},
			{
				id: 2,
				title: "How many legs has dog?",
				imageUrl: "./cat.jpg",
			},
			{
				id: 3,
				title: "How many legs has dinosaurs?",
				imageUrl: "./cat.jpg",
			},
			{
				id: 4,
				title: "How many legs has elephant?",
				imageUrl: "https://cats.com",
			},
		];
	}
	getQuestions() {
		return this.questions;
	}
}

export class Model {
	private data: AnswersMainInterface;
	constructor() {
		this.data = {
			question1: [
				{
					id: 1,
					title: "The cat has four legs",
					image: "./cat_2.jpg",
					isRight: true,
				},
				{
					id: 2,
					title: "The cat has two legs",
					image: "./cat_2.jpg",
					isRight: false,
				},
				{
					id: 3,
					title: "The cat has not a legs",
					image: "cat.jpg",
					isRight: false,
				},
				{
					id: 4,
					title: "The cat has no paws",
					image: "./cat.jpg",
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
	}
	getData() {
		return this.data;
	}
}
