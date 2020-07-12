import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GwswconsultingSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [GwswconsultingSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class GwswconsultingHomeModule {}
