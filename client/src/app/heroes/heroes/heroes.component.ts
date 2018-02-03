import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HEROES } from '../../services/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    const me = this;

    me.selectedHero = (hero === this.selectedHero) ? undefined : me.selectedHero = hero;
  }

}
