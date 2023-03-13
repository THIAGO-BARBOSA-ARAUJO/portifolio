import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stars: string = '';

  imagePerfil: string = '/assets/img/foto_perfil.jpeg';
  imageGithub: string = '/assets/img/github.png';
  imageLinkedin: string = '/assets/img/linkedin.png';

  constructor() { }

  ngOnInit(): void {
  }
  
  onChangeStar(value: string) {
    this.stars = value;
  }
}
