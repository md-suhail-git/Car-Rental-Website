import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonEngine } from '@angular/ssr/node';

@Component({
  selector: 'app-editcar',
  standalone:true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,CommonModule],
  templateUrl: './editcar.component.html',
  styleUrl: './editcar.component.css'
})
export class EditcarComponent implements OnInit {

  http = inject(HttpClient);
  router = inject(Router);
  route = inject(ActivatedRoute);

  carObj: any = {};
  carId: number = 0;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.carId = idParam ? +idParam : 0; // Convert string to number safely
    if (this.carId) {
      this.getCarDetails(this.carId);
    }
  }

  getCarDetails(id: number) {
    this.http.get<any>(`https://localhost:44358/api/Auth/GetCarById/${id}`).subscribe({
      next: (res) => {
        this.carObj = res;
      },
      error: (err) => {
        alert("Failed to fetch car details.");
        console.error(err);
      }
    });
  }

 onSubmit() {
  if (!this.carObj) {
    alert("Form data missing!");
    return;
  }
  this.http.put(`https://localhost:44358/api/Auth/UpdateCar/${this.carId}`, this.carObj).subscribe({
    next: () => {
      alert("Car updated successfully!");
      // ✅ Clear the form
      this.carObj = {};
      // ✅ Redirect
      this.router.navigate(['/admin/managecar']);
    },
    error: (err) => {
      alert("Update failed!");
      console.error(err);
    }
  });
}
}