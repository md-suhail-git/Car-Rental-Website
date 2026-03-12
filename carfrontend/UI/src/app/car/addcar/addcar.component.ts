import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addcar',
  imports: [CommonModule,FormsModule],
  templateUrl: './addcar.component.html',
  styleUrl: './addcar.component.css'
})
export class AddcarComponent {
newCar: any = {
  carId:0,
  carName: '',
  carType: '',
  brand: '',
  pricePerDay: 0.00,
  fuelType: '',
  seatingCapacity: 0,
  imageUrl: 'null',
  createdDate:new Date()
};
  http = inject(HttpClient);
  router = inject(Router);
  addCar(){
   this.http.post("https://localhost:44358/api/Auth/AddCar", this.newCar).subscribe((res: any) => {
      debugger;
      alert("Car added successfuly");
      this.router.navigate(['/admin/managecars']);
      this.newCar = {
        carId: 0,
        carName: '',
        carType: '',
        brand: '',
        pricePerDay: 0.00,
        fuelType: '',
        seatingCapacity: 0,
        imageUrl: 'null',
        createdDate: new Date()
      };
      this.router.navigateByUrl('admin/managecar')
    }, error => {
      debugger
      if (error.status == 400) {
        alert("invalid Body");
      }
    }
    )
  }
}
