import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";
import {Celular} from "../model/celular";
import { CelularService } from '../service/celular.service';
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {CommonModule} from '@angular/common';
import {catchError, tap, throwError} from 'rxjs';
@Component({
  selector: 'app-crear-celular',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './crear-celular.component.html',
  styleUrl: './crear-celular.component.css'
})
export class CrearCelularComponent implements OnInit{
  celular: Celular = new Celular();
  constructor( private celularService: CelularService, private router: Router) {
  }

  ngOnInit(): void {
    this.celularService.getCelulares().subscribe(dato => {
      console.log(dato);
    });
  }


  guardarCelular() {
    this.celularService.crearCelular(this.celular).pipe(
      tap(dato => {
        console.log(dato);
        this.irListarCelulares();
      }),
      catchError(error => {
        console.log(error);
        return throwError(() => new Error(error));
      })
    ).subscribe();
  }


  irListarCelulares() {
    this.router.navigate(['/celulares']);
    Swal.fire('Celular registrada', `El empleado ${this.celular.marca} ha sido registrado con exito`, `success`);
  }



  onSubmit() {
    this.guardarCelular();
  }
}
