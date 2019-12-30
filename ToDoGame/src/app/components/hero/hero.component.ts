import { Component, OnInit } from '@angular/core';
import { Hero, HeroRepo } from '../../model/Hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: Hero = HeroRepo.hero;

  constructor() { }

  ngOnInit() {
  }

}
