import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroes : Hero[];
  setHeroes(): void{
    // this.heroService.getHeros().subscribe(data => this.heroes = data);
    this.heroService.getHeros('bat').subscribe(data => this.heroes = data);
  }

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.setHeroes();
  }

}
