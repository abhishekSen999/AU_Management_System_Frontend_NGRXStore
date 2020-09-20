import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [NavigationComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule],
  exports: [NavigationComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
