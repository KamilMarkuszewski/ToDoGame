import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../model/Task';
import { Hero, HeroRepo } from '../../model/Hero';

@Component({
  selector: 'app-to-do-element',
  templateUrl: './to-do-element.component.html',
  styleUrls: ['./to-do-element.component.css']
})
export class ToDoElementComponent implements OnInit {

  hero: Hero = HeroRepo.hero;

  @Input() task: Task;

  @Output() deleteTask = new EventEmitter();

  @Output() toggleStatus = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  deleteTaskRow() {
    this.deleteTask.emit();
  }

  toggleTaskStatus() {
    const newStatus = !this.task.done;
    if(newStatus == true){
      this.hero.experience += this.task.experience;      
    }else{
      this.hero.experience -= this.task.experience;  
    }

    this.toggleStatus.emit(newStatus);
  }

}
