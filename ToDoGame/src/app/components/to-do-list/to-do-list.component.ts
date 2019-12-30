import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Task, TasksRepo } from '../../model/Task';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  @ViewChild('textInput') textInput: ElementRef;
  @ViewChild('descriptionInput') descriptionInput: ElementRef;
  @ViewChild('experienceInput') experienceInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  tasks: Task[] = TasksRepo;

  submitTask(event) {
    event.preventDefault();

    const taskName = this.textInput.nativeElement.value;
    const taskDescription = this.descriptionInput.nativeElement.value;
    const taskExperience = this.experienceInput.nativeElement.value;
    if (taskName !== '' && taskDescription !== '' && taskExperience !== '') {
      
      const task = new Task(0, taskName, taskDescription, false, taskExperience);
      console.log(task);
      this.tasks.push(task);
    }
    
    this.textInput.nativeElement.value = '';
    this.descriptionInput.nativeElement.value = '';
  }

  deleteTaskFromArray(index) {
    this.tasks.splice(index, 1);
  }

  setTaskStatus(index, status) {
    console.log("setTaskStatus");
    this.tasks[index].done = status;
  }

}
