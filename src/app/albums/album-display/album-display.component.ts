import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Album } from '../../models/album';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-album-display',
  templateUrl: './album-display.component.html',
  styleUrls: ['./album-display.component.css']
})
export class AlbumDisplayComponent implements OnInit {
	@Input() album : Album;
	@Output() deleteAlbum = new EventEmitter<Album>();
	@Output() editAlbum = new EventEmitter<Album>();
	public isDeleting = false;

	constructor(private albumsService:AlbumsService) { }

	ngOnInit() {
		
	}

	delete(){
		this.isDeleting = true;
		this.deleteAlbum.emit(this.album);
	}


	edit(){
		this.editAlbum.emit(this.album);
	}

}
