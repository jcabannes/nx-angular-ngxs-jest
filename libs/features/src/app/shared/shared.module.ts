import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

export const modules: any[] = [CommonModule];

@NgModule({
  imports: modules,
  exports: [...modules],
})
export class SharedModule {}
