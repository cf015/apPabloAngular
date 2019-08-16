import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
{ path: '', component: ListaComponent, pathMatch: 'full' },
{ path: 'lista', component: ListaComponent },
{ path: 'detalle', component: ModalComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
