import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaBlancaComponent } from './linea-blanca.component';

describe('LineaBlancaComponent', () => {
  let component: LineaBlancaComponent;
  let fixture: ComponentFixture<LineaBlancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaBlancaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineaBlancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
