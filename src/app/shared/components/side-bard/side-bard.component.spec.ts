import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SideBardComponent } from './side-bard.component';

describe('SideBardComponent', () => {
  let component: SideBardComponent;
  let fixture: ComponentFixture<SideBardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ SideBardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
