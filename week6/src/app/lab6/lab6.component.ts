import { Component, OnInit } from '@angular/core';
import { Lab6Service } from './lab6.service';
import { Lab6 } from '../lab6';

@Component({
  selector: 'app-lab6',
  templateUrl: './lab6.component.html',
  styleUrls: ['./lab6.component.css']
})
export class Lab6Component implements OnInit {

  content : Lab6[];
  LabService(): void{
    this.lab6Service.getLab(1).subscribe(data => this.content = data);
  }

  constructor(
    private lab6Service: Lab6Service
  ) { }

  ngOnInit() {
    this.LabService();
  }

}
