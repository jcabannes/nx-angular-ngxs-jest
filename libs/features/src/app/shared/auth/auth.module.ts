// TODO oidc to be imported only if needed by providing it to an auth sub module
// useful?
import { NgModule } from '@angular/core';
import { TestModule } from '@shared/auth/test.module';
import { EnvServiceProvider } from '@shared/services/env.service.provider';

@NgModule({
  imports: [
    TestModule.forRoot(
      EnvServiceProvider.useFactory().parent.child
        ? {
            id: 'test',
          }
        : null
    ),
  ],
})
export class AuthModule {}
