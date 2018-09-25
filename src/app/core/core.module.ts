import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {SharedModule} from '../shared/shared.module';
import {DomSanitizer} from '@angular/platform-browser';
import {loadSvgResources} from '../utils/svg.util';
import {MatIconRegistry} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

import 'hammerjs';
import {RouterModule} from '@angular/router';
import {ServicesModule} from '../services/services.module';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    RouterModule,
    ServicesModule.forRoot(),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent,],
  providers: [
    {provide: 'BASE_CONFIG', useValue: {uri: 'http://localhost:3000'}},
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf()parent: CoreModule, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载');
    }
    loadSvgResources(iconRegistry, sanitizer);

  }


}
