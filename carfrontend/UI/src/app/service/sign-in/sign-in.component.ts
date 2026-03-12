import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  loading = true;
  loginObj: any = {
    Email: "",
    Password: ""
  };
  http = inject(HttpClient);
  router = inject(Router);
  onLogin() {
    debugger;
    this.http.post("https://localhost:44358/api/Auth/Login", this.loginObj).subscribe((res: any) => {
      alert("Login Success");
      localStorage.setItem('userapp', JSON.stringify(res));
      this.router.navigateByUrl('admin/dashboard');
    }, error => {
      debugger
      if (error.status == 401)
        alert(error.error)
    }
    )
  }
}




