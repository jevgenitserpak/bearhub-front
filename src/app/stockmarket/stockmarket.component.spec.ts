import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockmarketComponent } from './stockmarket.component';

describe('StockmarketComponent', () => {
  let component: StockmarketComponent;
  let fixture: ComponentFixture<StockmarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockmarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
