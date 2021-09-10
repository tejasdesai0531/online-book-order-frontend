import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [HeaderComponent, LoadingIndicatorComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingIndicatorComponent
  ]
})
export class SharedModule { }
