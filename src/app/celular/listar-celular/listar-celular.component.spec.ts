import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCelularComponent } from './listar-celular.component';

describe('ListarCelularComponent', () => {
  let component: ListarCelularComponent;
  let fixture: ComponentFixture<ListarCelularComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ListarCelularComponent]
    })

    fixture = TestBed.createComponent(ListarCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
