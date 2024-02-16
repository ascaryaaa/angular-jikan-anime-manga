import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { AnimeListComponent } from './anime-list/anime-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: AnimeListComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class RoutingModule { }