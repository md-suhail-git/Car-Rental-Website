import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  email: string = "Example@gmail.com";
  loading = true;
  baseurl: string = "https://localhost:44358/api/Car/PostReservation";
  reservationForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      carType: [''],
      pickupLocation: [''],
      dropoffLocation: [''],
      pickupDate: [''],
      pickupTime: [''],
      dropoffDate: [''],
      dropoffTime: ['']
    });

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  onSubmit() {
    const jsonData = this.reservationForm.value;
    console.log('Form Data as JSON:', jsonData);

    this.http.post(this.baseurl, jsonData).subscribe({
      next: (res) => {
        console.log('Success:', res);
        this.reservationForm.reset();
      },
      error: (err) => {
        console.error('Error:', err);
      }

    });
  }
}
