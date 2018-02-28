import { Component, OnInit } from '@angular/core';

import { HeroService } from '../services/hero.service';
import { Hero } from '../models/hero';
import { GlobalsService } from '../services/globals/globals.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    protected globals: GlobalsService,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    const me = this;

    me.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
