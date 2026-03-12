
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
// import { Router } from 'express';


@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  toggleForm: boolean = false;
  registerobj: any = {
    Userid: "1",
    Emailid: "",
    Password: "",
    Createddate: new Date(),
    FullName: "",
    MobileNo: ""
  };
  loginObj: any = {
    emailid: "",
    password: ""
  }
  http = inject(HttpClient);
  router = inject(Router);
  // baseUrl: string = "https://localhost:44358/api/LogReg/CreateNewUser";
  // baseurl: string = "https://localhost:44358/api/LogReg/Login";
  OnRegister() {
    debugger;
    this.http.post("https://localhost:44358/api/LogReg/CreateNewUser", this.registerobj).subscribe((res: any) => {
      debugger;
      alert("Registeration Success");
    }, error => {
      debugger
      if (error.status == 400) {
        alert("invalid Body");
      }
    }
    )
  }
  onLogin() {
    debugger;
    this.http.post("https://localhost:44358/api/LogReg/Login", this.loginObj).subscribe((res: any) => {
      alert("Login Succes");
      localStorage.setItem('userapp', JSON.stringify(res));
      this.router.navigateByUrl("/admin");
    }, error => {
      debugger
      if (error.status == 401)
        alert(error.error)
    }
    )
  }
}













