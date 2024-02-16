import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { MangaListComponent } from './manga-list/manga-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: MangaListComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class RoutingModule { }