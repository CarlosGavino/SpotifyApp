import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PlayListBodyComponent } from 'src/app/shared/components/play-list-body/play-list-body.component';
import { OrderListPipe } from 'src/app/shared/pipes/order-list.pipe';
import { SearchComponent } from '../../components/search/search.component';

import { HistoryPageComponent } from './history-page.component';

describe('HistoryPageComponent', () => {
  let component: HistoryPageComponent;
  let fixture: ComponentFixture<HistoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, FormsModule],
      declarations: [ HistoryPageComponent, SearchComponent, PlayListBodyComponent, OrderListPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
