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
    this.getHeroById();
  }

  getHeroById(): void {
    const me = this,
      id = this.route.snapshot.paramMap.get('id');

    me.heroService.getHeroById(id)
      .subscribe( hero => {
          me.hero = hero[0];
      });
  }

  // Buttons methods
  onClickSaveHero(): void {
    const me = this;

    me.heroService.updateHero(me.hero)
        .subscribe( () => {
            me.onClickGoBack();
          }
        );
  }

  onClickGoBack() {
    this.location.back();
  }

}
