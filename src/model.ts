export interface ModelInterface {
	getData: () => DataInterface[];
}
export interface DataInterface {
	id: number;
	title: string;
	description: string;
	deadline: Date;
}
export class Model {
	private data: DataInterface[];
	constructor() {
		this.data = [{}, {}, {}];
		console.log(this.data);
	}
	getData(): DataInterface[] {
		return this.data;
	}
}
