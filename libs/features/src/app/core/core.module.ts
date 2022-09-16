import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { DataState } from '@shared/states/data/data.state';

@NgModule({
  imports: [NgxsModule.forRoot([DataState])],
})
export class CoreModule {}
