import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCelularComponent } from './detalle-celular.component';

describe('DetalleCelularComponent', () => {
  let component: DetalleCelularComponent;
  let fixture: ComponentFixture<DetalleCelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleCelularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
