import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: string[] = [
    '/assets/img/html5.png',
    '/assets/img/css-3.png',
    '/assets/img/script-java.png',
    '/assets/img/react.png',
    '/assets/img/nodejs.png',
    '/assets/img/typescript.png',
    '/assets/img/github2.png',
    '/assets/img/docker.png',
    '/assets/img/api.png',
    '/assets/img/servidor-sql.png',
    '/assets/img/mongo.png',
    '/assets/img/python.png',
  ];

  constructor() {}

  ngOnInit(): void {}
}
