import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './component/intro/intro.component';
import { CvComponent } from './component/cv/cv.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'intro', component: IntroComponent },
  { path: 'cv', component: CvComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
