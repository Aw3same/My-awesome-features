import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const LAYOUT_COMPONENTS = [MainLayoutComponent];

@NgModule({
  declarations: [...LAYOUT_COMPONENTS],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    // Material
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [...LAYOUT_COMPONENTS],
})
export class CoreModule {}
