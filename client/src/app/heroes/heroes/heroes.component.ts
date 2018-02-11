import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onAddHero(heroName: string): void {
    const me = this,
          newHero = new Hero();
    newHero.name = heroName;
    newHero.username = 'ugehidalgo'; // Should be loaded from the logged user

    me.heroService.addHero(newHero)
      .subscribe(newHeroAdded => me.heroes.push(newHeroAdded));
  }

  getHeroes(): void {
    const me = this;

    me.heroService.getHeroes()
      .subscribe(heroes => me.heroes = heroes);
  }

}
