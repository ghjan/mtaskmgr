import {ModuleWithProviders, NgModule} from '@angular/core';

@NgModule()
export class ServicesModule {
  // 工厂方法 metas数据不能支持根据情况动态变化
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [],
    };

  }

}
