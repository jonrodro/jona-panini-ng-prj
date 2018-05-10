import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Album } from '../../models/album';
import { AlbumsService } from '../../services/albums.service';
 
@Component({
	selector: 'app-album-add',
	templateUrl: './album-add.component.html',
	styleUrls: ['./album-add.component.css']
})
export class AlbumAddComponent implements OnInit, OnChanges {
	@Output() addAlbum = new EventEmitter<any>();
	@Output() editAlbum = new EventEmitter<any>();
	@Input() canAdd : boolean = true;
	@Input('selectedAlbum') album : Album = new Album();
	submitted = false;
	isEditing = false;

	onSubmit(albumForm) {
		if(this.isEditing){
			this.editAlbum.emit({
				'album':this.album,
				'form':albumForm
			});
			this.isEditing = false;
		} else {
			this.addAlbum.emit({
				'album':this.album,
				'form':albumForm
			});
		}
		this.submitted = true; 
	}

	constructor() { }

	ngOnInit() {
	}

	ngOnChanges(changes){
		console.log('changes',changes)
		if(changes.album){
			if(changes.album.currentValue._id){
				console.log('is editing');
				this.isEditing = true;
			}
		}
	}

	newAlbum(){
		this.submitted = false; 
		this.isEditing = false;
		this.album = new Album();
	}

}
