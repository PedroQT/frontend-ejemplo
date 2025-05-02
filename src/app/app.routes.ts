import { Routes } from '@angular/router';
import { ListarCelularComponent} from './celular/listar-celular/listar-celular.component';
import { CrearCelularComponent} from './celular/crear-celular/crear-celular.component';
import { EditarCelularComponent} from './celular/editar-celular/editar-celular.component';
import { DetalleCelularComponent} from './celular/detalle-celular/detalle-celular.component';


export const routes: Routes = [
  {path: 'celulares', component: ListarCelularComponent},
  {path: '', redirectTo: 'celulares', pathMatch: 'full'},
  {path: 'crear-celular', component: CrearCelularComponent},
  {path: 'editar-celular/:id', component: EditarCelularComponent},
  {path: 'detalle-celular/:id', component: DetalleCelularComponent},


];
