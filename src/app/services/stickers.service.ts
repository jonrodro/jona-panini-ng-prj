import { Injectable } from '@angular/core';
import { Sticker } from '../models/sticker';
import { DataService } from '../services/data.service';

@Injectable()
export class StickersService {
	constructor(private dataService:DataService) { }

	public getStickers(){
		return this.dataService.get('/api/stickers');
	}

	public createSticker(sticker:Sticker){
		return this.dataService.post('/api/stickers',{'sticker':sticker});
	}

	public editSticker(sticker:Sticker){
		return this.dataService.put('/api/stickers/'+sticker._id,{'sticker':sticker});
	}

	public deleteSticker(sticker:Sticker){
		return this.dataService.delete('/api/stickers/'+sticker._id);
	}
}
