import { Component, OnInit } from '@angular/core';
import {Celular} from '../model/celular';
import {CelularService} from '../service/celular.service';
import Swal from 'sweetalert2';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-listar-celular',
  imports: [CommonModule],
  templateUrl: './listar-celular.component.html',
  styleUrl: './listar-celular.component.css'
})
export class ListarCelularComponent implements OnInit{

  celulares!: Celular[];
  constructor(private celularService: CelularService, private routerPath: Router, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.obtenerCelulares();
  }

  editarCelular(codigo_cel: number) {
    this.routerPath.navigate(['/editar-celular/' + codigo_cel]);
  }

  private obtenerCelulares() {
    this.celularService.getCelulares().subscribe(dato => {
      this.celulares = dato;
    });
  }

  eliminarCelular(codigo_cel: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Confirma si deseas eliminar el celular',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo',
      cancelButtonText: 'No, cancelar',
      buttonsStyling: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.celularService.borrarCelular(codigo_cel).subscribe(dato => {
          console.log(dato);
          this.obtenerCelulares();
          Swal.fire(
            'Celular eliminado',
            'El celular ha sido eliminado con exito',
            'success'
          );
        });
      }
    });
  }

  verDeralleCelular(codigo_cel: number) {
    this.routerPath.navigate(['/detalle-celular/' + codigo_cel]);
  }


}
