import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Sticker } from '../../models/sticker';
import { StickersService } from '../../services/stickers.service';
 
@Component({
	selector: 'app-sticker-add',
	templateUrl: './sticker-add.component.html',
	styleUrls: ['./sticker-add.component.css']
})
export class StickerAddComponent implements OnInit, OnChanges {
	@Output() addSticker = new EventEmitter<any>();
	@Output() editSticker = new EventEmitter<any>();
	@Input() canAdd : boolean = true;
	@Input('selectedSticker') sticker : Sticker = new Sticker();
	submitted = false;
	isEditing = false;

	onSubmit(stickerForm) {
		if(this.isEditing){
			this.editSticker.emit({
				'sticker':this.sticker,
				'form':stickerForm
			});
			this.isEditing = false;
		} else {
			this.addSticker.emit({
				'sticker':this.sticker,
				'form':stickerForm
			});
		}
		this.submitted = true; 
	}

	constructor() { }

	ngOnInit() {
	}

	ngOnChanges(changes){
		console.log('changes',changes)
		if(changes.sticker && changes.sticker.currentValue._id){
			console.log('is editing');
			this.isEditing = true;
		}
	}

	newSticker(){
		this.submitted = false; 
		this.isEditing = false;
		this.sticker = new Sticker();
	}

}
