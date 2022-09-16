import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MyAppModule } from '@apps/my-app/src/app/app.module';
import { environment } from '@apps/my-app/src/environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(MyAppModule)
  .catch((err) => console.error(err));
