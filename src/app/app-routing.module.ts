import {PageNotFoundComponent} from './page-not-found';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'projects', redirectTo: '/projects', pathMatch: 'full'},
  {path: 'tasklists', redirectTo: '/tasklists', pathMatch: 'full'},
  {
    path: '**', component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // {useHash: true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
