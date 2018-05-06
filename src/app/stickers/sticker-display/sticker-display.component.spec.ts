import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerDisplayComponent } from './sticker-display.component';

describe('StickerDisplayComponent', () => {
  let component: StickerDisplayComponent;
  let fixture: ComponentFixture<StickerDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickerDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
