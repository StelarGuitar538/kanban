import { Injectable } from '@angular/core';
import { pendientTask } from '../pendient-task';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  claveLocalStorage = 'tareas_angular'

  constructor() { }

  getTasks(): pendientTask[] {
    return JSON.parse(localStorage.getItem(this.claveLocalStorage) || '[]')
  }

  saveTasks(tasks: pendientTask[]) {
    localStorage.setItem(this.claveLocalStorage, JSON.stringify(tasks))
  }
}
