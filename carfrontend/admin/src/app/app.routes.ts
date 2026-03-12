import { Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserComponent } from '../user/user.component';

export const routes: Routes = [
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    {
        
        path: 'admin', component: AdminComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'user', component: UserComponent }
        ]
    },
];
