import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router){}
  
  toLogin(){
    this.router.navigate(['/login']);   
  }

  stripe(){
      window.open('https://stripe.com/en-br', '_blank');
  } 

}
