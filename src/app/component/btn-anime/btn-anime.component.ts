import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-anime',
  templateUrl: './btn-anime.component.html',
  styleUrls: ['./btn-anime.component.scss']
})
export class BtnAnimeComponent {

  constructor(private router:Router){}

  toCv(){    
    this.router.navigate(['/cv']);
  }

}
