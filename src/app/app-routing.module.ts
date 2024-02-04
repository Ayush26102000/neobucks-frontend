import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { RootpageComponent } from './Pages/rootpage/rootpage.component';


const routes: Routes = [

  { path: 'homepage', redirectTo: '/homepage', pathMatch: 'full' },
  { path: '', component: RootpageComponent },
  { path: 'homepage', component: HomepageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
