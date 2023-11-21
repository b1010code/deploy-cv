import { AfterViewInit, Component, OnInit, booleanAttribute } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  toLoad() {
    location.reload();
  }

  toLogin() {
    this.router.navigate(['/login']);
  }

  stripe() {
    window.open('https://stripe.com/en-br', '_blank');
  }

  toCV() {
    this.router.navigate(['/cv']);
  }

  private isReloaded: boolean | undefined;


  ngOnInit(): void {
    if (this.isReloaded) {
      return;
    }

    setTimeout(() => {
      this.isReloaded = true;
    //  location.reload();
    }, 100);
  
  }

  ngAfterViewInit(): void {
    
  }

}
