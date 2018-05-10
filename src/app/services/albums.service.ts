import { Injectable } from '@angular/core';
import { Album } from '../models/album';
import { DataService } from '../services/data.service';

@Injectable()
export class AlbumsService {
	constructor(private dataService:DataService) { }

	public getAlbums(){
		return this.dataService.get('/api/albums');
	}

	public createAlbum(album:Album){
		return this.dataService.post('/api/albums',{'album':album});
	}

	public editAlbum(album:Album){
		return this.dataService.put('/api/albums/'+album._id,{'album':album});
	}

	public deleteAlbum(album:Album){
		return this.dataService.delete('/api/albums/'+album._id);
	}
}
