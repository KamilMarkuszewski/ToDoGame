
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Goal } from '../../model/Goal';
import { Hero, HeroRepo } from '../../model/Hero';

@Component({
  selector: 'app-achievements-element',
  templateUrl: './achievements-element.component.html',
  styleUrls: ['./achievements-element.component.css']
})
export class AchievementsElementComponent implements OnInit {

  hero: Hero = HeroRepo.hero;

  @Input() goal: Goal;

  @Output() deleteGoal = new EventEmitter();

  @Output() toggleStatus = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }


  deleteGoalRow() {
    this.deleteGoal.emit();
  }

  toggleGoalStatus() {
    const newStatus = !this.goal.done;
    if(newStatus == true){
      this.hero.experience += this.goal.experience;      
    }else{
      this.hero.experience -= this.goal.experience;  
    }

    this.toggleStatus.emit(newStatus);
  }
}