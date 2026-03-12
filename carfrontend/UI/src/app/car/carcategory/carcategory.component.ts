import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-carcategory',
  imports: [MatCardModule, MatButtonModule,CommonModule],
  templateUrl: './carcategory.component.html',
  styleUrl: './carcategory.component.css'
})
export class CarcategoryComponent implements OnInit {
carList: any[] = [];
 http = inject(HttpClient);
ngOnInit(): void {
  this.http.get('https://localhost:44358/api/Auth/GetAllCars').subscribe((res: any) => {
    this.carList = res;
  });

}
}
