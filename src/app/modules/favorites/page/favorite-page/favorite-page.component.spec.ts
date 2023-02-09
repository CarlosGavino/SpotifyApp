import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePageComponent } from './favorite-page.component';
import { PlayListHeaderComponent } from 'src/app/shared/components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from 'src/app/shared/components/play-list-body/play-list-body.component';
import { OrderListPipe } from 'src/app/shared/pipes/order-list.pipe';

describe('FavoritePageComponent', () => {
  let component: FavoritePageComponent;
  let fixture: ComponentFixture<FavoritePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule],
      declarations: [ FavoritePageComponent, PlayListHeaderComponent, PlayListBodyComponent, OrderListPipe  ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
