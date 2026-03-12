import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  userList:any[]=[];
  constructor(private http :HttpClient){}
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.http.get("https://localhost:44358/api/Auth/GetAllUsers").subscribe((res:any)=>{
      this.userList=res;
    })
  }

}
