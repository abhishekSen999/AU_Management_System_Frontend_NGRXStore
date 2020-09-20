import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardRoutingModule } from './onboard-routing.module';
import { OnboardComponent } from './onboard.component';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  declarations: [OnboardComponent],
  imports: [CommonModule, OnboardRoutingModule , SharedModule],
})
export class OnboardModule {}
