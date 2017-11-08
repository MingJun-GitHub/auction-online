import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../app.hero";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Location} from "@angular/common";
import {HeroService} from "../services/hero.service";
import 'rxjs/Rx';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: ParamMap) => this.heroService.getHero(+params['id']).subscribe(hero => this.hero = hero));
  }
  goBack(): void {
    this.location.back();
  }

}
