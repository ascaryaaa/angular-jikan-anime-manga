import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'anime',
        loadChildren: ()=> 
        import('./anime/anime.module').then(m => m.AnimeModule)    
    },
    {
        path: 'manga',
        loadChildren: ()=> 
        import('./manga/manga.module').then(m => m.MangaModule)    
    }
];
