import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCelularComponent } from './editar-celular.component';

describe('EditarCelularComponent', () => {
  let component: EditarCelularComponent;
  let fixture: ComponentFixture<EditarCelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarCelularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
