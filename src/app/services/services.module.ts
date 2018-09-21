import {ModuleWithProviders, NgModule} from '@angular/core';

@NgModule()
export class ServicesModule {
  // 工厂方法 不再使用元数据,因为不够动态化
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: []
    };
  }
}
