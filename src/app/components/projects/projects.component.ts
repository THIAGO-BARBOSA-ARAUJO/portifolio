import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { group } from 'console';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  show: boolean = false;
  show2: boolean = false;
  show3: boolean = false;

  prop: string = 'project1'

  changeInToggleGroup(val: string) {
    this.prop = val;
  }
 
}
