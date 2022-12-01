import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversorPage } from './coversor.page';

const routes: Routes = [
  {
    path: '',
    component: ConversorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoversorPageRoutingModule {}
