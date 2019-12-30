import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Goal, GoalsRepo } from '../../model/Goal';
import { CategoryEnum, CategoriesRepo, Category } from 'src/app/model/Category';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  @ViewChild('textInput') textInput: ElementRef;
  @ViewChild('descriptionInput') descriptionInput: ElementRef;
  @ViewChild('experienceInput') experienceInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  goals: Goal[] = GoalsRepo;

  category: Category;

  selectedCategory: number = 0;

  categories : Category[] = CategoriesRepo;

  submitGoal(event) {
    event.preventDefault();

    const taskName = this.textInput.nativeElement.value;
    const taskDescription = this.descriptionInput.nativeElement.value;
    const taskExperience = this.experienceInput.nativeElement.value;
    if (taskName !== '' && taskDescription !== '' && taskExperience !== '') {
      
      const task = new Goal(0, taskName, taskDescription, false, taskExperience, this.category.id);
      console.log(task);
      this.goals.push(task);
    }
    
    this.textInput.nativeElement.value = '';
    this.descriptionInput.nativeElement.value = '';
  }

  deleteGoalFromArray(index) {
    this.goals.splice(index, 1);
  }

  setGoalStatus(index, status) {
    this.goals[index].done = status;
  }

  setSelectedCategory(id){
    this.selectedCategory = id;
    this.goals= GoalsRepo.filter(g => (g.category == this.selectedCategory || this.selectedCategory == 0));
  }

}
