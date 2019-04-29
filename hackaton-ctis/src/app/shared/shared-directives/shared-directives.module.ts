import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfMaskDirective } from './cpf-mask.directive';
import { ValueMaskDirective } from './value-mask.directive';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    
  CpfMaskDirective,
    
  ValueMaskDirective],
  exports: [
    CpfMaskDirective,
    ValueMaskDirective
  ]
})
export class SharedDirectivesModule { }
