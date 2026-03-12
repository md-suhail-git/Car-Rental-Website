import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { FooterComponent } from "../footer/footer.component";

import { DashboardComponent } from "../dashboard/dashboard.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin',
  imports: [NavbarComponent, SidebarComponent, RouterOutlet, FooterComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
