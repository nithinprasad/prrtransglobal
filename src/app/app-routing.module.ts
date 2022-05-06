import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { FeatureComponent } from './component/feature/feature.component';
import { HomeComponent } from './component/home/home.component';
import { ServicesComponent } from './component/services/services.component';
import { StrengthComponent } from './component/strength/strength.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: 'service', 
    component: ServicesComponent 
  },
  { path: 'strength', 
    component: StrengthComponent 
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { path: 'contact',
    component: ContactsComponent
  },
  {
    path: '',
    component: HomeComponent
   
},
{
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
