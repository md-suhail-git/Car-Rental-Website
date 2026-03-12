import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './addcustomer.component.html',
  styleUrl: './addcustomer.component.css'
})
export class AddcustomerComponent {
  http = inject(HttpClient);
  router = inject(Router);
  newCust: any = {
    CustomerId: 0,
    FullName: '',
    Email: '',
    MobileNo: '',
    Address: '',
    CreatedDate: new Date(),
    Feedbacks: []
  }

  addCust() {
    this.http.post("https://localhost:44358/api/Auth/AddCustomer", this.newCust).subscribe((res: any) => {
      debugger;
      alert("Custmer added successfuly");
      this.router.navigate(['/admin/managecustomer']);
      this.newCust = {
        CustomerId: 0,
        FullName: '',
        Email: '',
        MobileNo: '',
        Address: '',
        CreatedDate: new Date()
      }
    },
      error => {
        debugger
        if (error.status == 400) {
          alert("invalid Body");
        }
      }
    )
  }


}
