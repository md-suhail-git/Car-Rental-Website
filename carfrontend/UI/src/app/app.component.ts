import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { HomeComponent } from "./component/home/home.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule ],
   templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UI';
  
}
