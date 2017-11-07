import { CabezaComponent } from './cabeza/cabeza.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie/pie.component';
import { LogComponent } from './log/log.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CabezaComponent, PieComponent, LogComponent],
  exports: [CabezaComponent, PieComponent]
})
export class SharedModule { }
