import { Pipe, PipeTransform } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Pipe({name : 'ucAuthor'})
export class UCAuthorPipe {

    authorName: string = 'Jonathan A. Rodriguez';

    constructor(private titlecasePipe:TitleCasePipe ) { }

    transformName(){
        this.authorName = this.titlecasePipe.transform(this.authorName);
    }
}