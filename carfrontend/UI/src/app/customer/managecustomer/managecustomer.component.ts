import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managecustomer',
    standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './managecustomer.component.html',
  styleUrl: './managecustomer.component.css'
})
export class ManagecustomerComponent implements OnInit {
deleteCustomer(arg0: any) {
throw new Error('Method not implemented.');
}
editCustomer(arg0: any) {
throw new Error('Method not implemented.');
}
   http = inject(HttpClient);
  router = inject(Router);

 
  custList: any[] = [];


  ngOnInit(): void {
    this.getAllCustomer();
  }
  

 getAllCustomer() {
    this.http.get<any[]>("https://localhost:44358/api/Auth/GetAllCustomer")
      .subscribe({
        next: (res) => {
          this.custList = res;
        },
        error: () => {
          alert("Failed to load customers");
        }
      });
  }
}
