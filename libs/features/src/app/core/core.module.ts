import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AuthModule } from '@shared/auth/auth.module';
import { EnvService } from '@shared/services/env.service';
import { DataState } from '@shared/states/data/data.state';

@NgModule({
  imports: [BrowserModule, AuthModule, NgxsModule.forRoot([DataState])],
  providers: [EnvService],
})
export class CoreModule {}
