import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css'],
})
export class ShowProjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() prop: string = '';

  title: string[] = ["title"]

  images_drivent: string[] = [
    '/assets/img/projetos/drivent/drivent1.png',
    '/assets/img/projetos/drivent/drivent2.png',
    '/assets/img/projetos/drivent/drivent3.png',
    '/assets/img/projetos/drivent/drivent4.png',
    '/assets/img/projetos/drivent/drivent5.png',
    '/assets/img/projetos/drivent/drivent6.png',
  ];

  images_shortly: string[] = [
    '/assets/img/projetos/shortly/shortly1.png',
    '/assets/img/projetos/shortly/shortly2.png',
    '/assets/img/projetos/shortly/shortly3.png',
    '/assets/img/projetos/shortly/shortly4.png',
  ];

  images_cineflex: string[] = [
    '/assets/img/projetos/cineflex/cineflex1.png',
    '/assets/img/projetos/cineflex/cineflex2.png',
    '/assets/img/projetos/cineflex/cineflex3.png',
    '/assets/img/projetos/cineflex/cineflex4.png',
    '/assets/img/projetos/cineflex/cineflex5.png',
    '/assets/img/projetos/cineflex/cineflex6.png',
  ];
}
