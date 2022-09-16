import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AppComponent } from '@app/app.component';
import { NxWelcomeComponent } from '@app/nx-welcome.component';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [CoreModule, SharedModule],
})
export class AppModule {}
