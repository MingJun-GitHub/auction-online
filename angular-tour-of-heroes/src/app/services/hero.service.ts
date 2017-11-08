import { Injectable } from '@angular/core';
import {Hero} from "../app.hero";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
@Injectable()
export class HeroService {
  private heroesUrl = '/api/heroes/';
  private heroUrl = '/api/hero/';
  private addHeroUrl = '/api/addHero/';
  constructor(private http: Http) { }

  getHero(id: number): Observable<Hero> {
    return this.http.get(this.heroUrl + id)
      .map(res => res.json());
  }
  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
      .map(res => res.json());
  }
  addHero(hero: Hero): Observable<any> {
    return this.http.post(this.addHeroUrl, hero)
      .map(res => res.json());
  }
}
