export class Album {
	public _id: string = undefined;
	public shortName : string = '';
	public longName : string = '';
	public year : number = 0;
	public active : Boolean = true;
	public minPosition : number = 0;
	public maxPosition : number = 500;
	constructor(){
	}
}
