import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerAddComponent } from './sticker-add.component';

describe('StickerAddComponent', () => {
  let component: StickerAddComponent;
  let fixture: ComponentFixture<StickerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
