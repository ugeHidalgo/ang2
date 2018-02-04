import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    const me = this;

    me.selectedHero = (hero === this.selectedHero) ? undefined : me.selectedHero = hero;
  }

  getHeroes(): void {
    const me = this;

    me.heroService.getHeroes()
      .subscribe(heroes => me.heroes = heroes);
  }

}
