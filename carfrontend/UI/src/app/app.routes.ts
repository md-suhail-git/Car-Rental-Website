import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ServiceComponent } from './component/service/service.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContactComponent } from './component/contact/contact.component';
import { FeatureComponent } from './component/feature/feature.component';
import { TeamComponent } from './component/team/team.component';
import { CarsComponent } from './component/cars/cars.component';
import { LoginComponent } from './component/login/login.component';
import { SignInComponent } from './service/sign-in/sign-in.component';
import { SignUpComponent } from './service/sign-up/sign-up.component';
import { SidebarComponent } from './Admin/sidebar/sidebar.component';
import { NavbarComponent } from './Admin/navbar/navbar.component';
import { FooterComponent } from './Admin/footer/footer.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { UserComponent } from './Admin/user/user.component';
import { AddcarComponent } from './car/addcar/addcar.component';
import { ManagecarsComponent } from './car/managecars/managecars.component';
import { CarcategoryComponent } from './car/carcategory/carcategory.component';
import { CaravailabilityComponent } from './car/caravailability/caravailability.component';
import { EditcarComponent } from './car/editcar/editcar.component';
import { AddcustomerComponent } from './customer/addcustomer/addcustomer.component';
import { ManagecustomerComponent } from './customer/managecustomer/managecustomer.component';

// import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
//  import { AdminComponent } from './component/admin/admin.component';



export const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
   { path: 'about', component: AboutComponent },
   { path: 'service', component: ServiceComponent },
   { path: 'blog', component: BlogComponent },
   { path: 'contact', component: ContactComponent },
   { path: 'feature', component: FeatureComponent },
   { path: 'team', component: TeamComponent },
   { path: 'cars', component: CarsComponent },
   { path: 'login', component: LoginComponent },
   { path: 'signin', component: SignInComponent },
   { path: 'signup', component: SignUpComponent },
   {
      path: 'admin', component: AdminComponent,
      children: [
         { path: 'dashboard', component: DashboardComponent },
         { path: 'user', component: UserComponent },
         { path: 'addcar', component: AddcarComponent },
         { path: 'managecars', component: ManagecarsComponent },
         { path: 'carcategory', component: CarcategoryComponent },
         { path: 'caravailability', component: CaravailabilityComponent },
         { path: 'editcar/:id', component: EditcarComponent },
         { path: 'addcustomer', component: AddcustomerComponent },
         { path: 'managecustomer', component: ManagecustomerComponent }



      ]
   },





];