import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPlayerComponent } from './medi-player.component';

describe('MediPlayerComponent', () => {
  let component: MediaPlayerComponent;
  let fixture: ComponentFixture<MediaPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaPlayerComponent ]
    })
    .compileComponents();
 
    fixture = TestBed.createComponent(MediaPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
