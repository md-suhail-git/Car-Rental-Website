import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managecars',
  imports: [CommonModule,FormsModule],
  templateUrl: './managecars.component.html',
  styleUrl: './managecars.component.css'
})
export class ManagecarsComponent implements OnInit {

  http = inject(HttpClient);
  router = inject(Router);

  carList: any[] = [];

  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars() {
    this.http.get<any[]>("https://localhost:44358/api/Auth/GetAllCars")
      .subscribe({
        next: (res) => this.carList = res,
        error: () => alert("Failed to load cars")
      });
  }

  deleteCar(id: number) {
    if (confirm("Are you sure to delete this car?")) {
      this.http.delete(`https://localhost:44358/api/Auth/DeleteCar/${id}`).subscribe({
        next: () => {
          alert("Car Deleted Successfully!");
          this.getAllCars(); // Refresh list
        },
        error: () => alert("Error deleting car!")
      });
    }
  }

 editCar(id: number) {
  this.router.navigate(['/admin/editcar', id]);
}
}

