import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule()
export class TestModule {
  static forRoot(_config: { id: string }): ModuleWithProviders<TestModule> {
    return {
      ngModule: TestModule,
    };
  }
}
