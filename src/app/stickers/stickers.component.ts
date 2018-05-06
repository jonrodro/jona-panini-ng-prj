import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Sticker } from '../models/sticker';
import { StickersService } from '../services/stickers.service';

@Component({
	selector: 'app-stickers',
	templateUrl: './stickers.component.html',
	styleUrls: ['./stickers.component.css']
})
export class StickersComponent implements OnInit, AfterViewInit {
	public stickers : Sticker[];
	public selectedSticker : Sticker = new Sticker;
	public loading : boolean = false;

	constructor(private stickersService: StickersService) { }

	ngOnInit() {
		this.getStickers();
	}

	public editSticker(sticker){
		console.log('edit',sticker);
		this.selectedSticker = Object.assign({}, sticker);
	}

	public editStickerSave(sticker){
		this.stickersService.editSticker(sticker.sticker)
			.then(data => {
				sticker.form.reset();
				this.getStickers();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	public deleteSticker(sticker){
		this.stickersService.deleteSticker(sticker)
			.then(data => {
				this.getStickers();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	public getStickers(){
		this.stickersService.getStickers().subscribe((data) => {
				this.stickers = data.sticker;
			},(error)=>{
				console.log('error',error);
			});
	}

	public addSticker(sticker:any){
		this.loading = true;
		this.stickersService.createSticker(sticker.sticker)
			.then(data => {
				console.log('sticker was added');
				sticker.form.reset();
				this.loading = false;
				this.getStickers();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	ngAfterViewInit(){
		console.timeEnd();
	}
}
