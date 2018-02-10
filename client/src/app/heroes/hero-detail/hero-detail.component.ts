import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const _id = this.route.snapshot.paramMap.get('_id');
    this.heroService.getHero(_id)
      .subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }

}
