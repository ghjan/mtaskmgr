import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {LoginModule} from './login/login.module';
import {RouterModule, Routes} from '@angular/router';
import {ProjectModule} from './project/project.module';
import {TaskModule} from './task/task.module';
import {PageNotFoundComponent} from './page-not-found';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'projects', redirectTo: '/projects', pathMatch: 'full'},
  {path: 'tasklists', redirectTo: '/tasklists', pathMatch: 'full'},
  {
    path: '**', component: PageNotFoundComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    LoginModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: true}), // debugging purposes only
    ProjectModule,
    TaskModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
