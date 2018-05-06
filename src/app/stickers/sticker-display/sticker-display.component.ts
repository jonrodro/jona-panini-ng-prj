import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sticker } from '../../models/sticker';
import { StickersService } from '../../services/stickers.service';

@Component({
  selector: 'app-sticker-display',
  templateUrl: './sticker-display.component.html',
  styleUrls: ['./sticker-display.component.css']
})
export class StickerDisplayComponent implements OnInit {
	@Input() sticker : Sticker;
	@Output() deleteSticker = new EventEmitter<Sticker>();
	@Output() editSticker = new EventEmitter<Sticker>();
	public isDeleting = false;

	constructor(private stickersService:StickersService) { }

	ngOnInit() {
		
	}

	delete(){
		this.isDeleting = true;
		this.deleteSticker.emit(this.sticker);
	}


	edit(){
		this.editSticker.emit(this.sticker);
	}

}
