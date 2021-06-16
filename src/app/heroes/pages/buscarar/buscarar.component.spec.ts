import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscararComponent } from './buscarar.component';

describe('BuscararComponent', () => {
  let component: BuscararComponent;
  let fixture: ComponentFixture<BuscararComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscararComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscararComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
