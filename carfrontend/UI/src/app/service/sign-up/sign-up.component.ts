import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [RouterModule,ReactiveFormsModule,FormsModule,HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
 registerobj: any = {
    UserId: 0,
    Email: "",
    Password: "",
    Createddate: new Date(),
    FullName: "",
    MobileNo: ""
  };
   http = inject(HttpClient);
  router = inject(Router);
  onRegister(){
     debugger;
    this.http.post("https://localhost:44358/api/Auth/CreateNewUser", this.registerobj).subscribe((res: any) => {
      debugger;
      alert("Registeration Success");
      this.router.navigateByUrl('admin/dashboard')
    }, error => {
      debugger
      if (error.status == 400) {
        alert("invalid Body");
      }
    }
    )
  }
 
}
