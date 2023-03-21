import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlancosComponent } from './blancos.component';

describe('BlancosComponent', () => {
  let component: BlancosComponent;
  let fixture: ComponentFixture<BlancosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlancosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlancosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
