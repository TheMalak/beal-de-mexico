import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent,
    HeroComponent
  ],
})
export class SharedModule { }
