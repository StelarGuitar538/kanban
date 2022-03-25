import { Component, OnInit } from '@angular/core';
import { pendientTask } from './pendient-task';
import { TareasService } from './services/tareas.service';
import { TaskList } from './task.model';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export default class AppComponent implements OnInit{
  constructor( private tareasService: TareasService) { }
  nameTask = ''
  tasks: TaskList[] = []
  saveTask() {
    const newTask = new pendientTask(this.nameTask);
    this.tasks.push(newTask);
    this.tareasService.saveTasks(this.tasks);
    this.getTasks();
    this.nameTask = ''
  }

  deleteTask(indice: number) {
    const confirma = confirm("realmente quiere eliminar la tarea?")
    if (!confirma) {
      return;
    }

    this.tasks.splice(indice, 1);
    this.tareasService.saveTasks(this.tasks);
  }

  changestateOfTasks() {
    this.tareasService.saveTasks(this.tasks);
  }

  getTasks() {
    this.tasks = this.tareasService.getTasks()
  }

  ngOnInit() {
    this.getTasks()
  }

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}

