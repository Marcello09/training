import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent,
    SearchComponent
  ]
})
export class SharedModule { }
