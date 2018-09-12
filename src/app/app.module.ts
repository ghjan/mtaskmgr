import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {LoginModule} from './login/login.module';
import {RouterModule, Routes} from '@angular/router';
import {ProjectModule} from './project/project.module';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'project', redirectTo: '/project', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    LoginModule,
    RouterModule.forRoot(routes),
    ProjectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
