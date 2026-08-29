import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // 1. Interpolación y Pipes
  title: string = 'Gestor de Tareas Dockerizado';
  today: Date = new Date();

  // 2. Two-Way Data Binding
  newTask: string = '';

  // Lista de tareas
  tasks: string[] = [
    'Aprender Docker con Angular',
    'Explorar Angular 22 y Control Flow (@if / @for)'
  ];

  // 3. Evento: Guardar tarea
  addTask(): void {
    if (this.newTask && this.newTask.trim() !== '') {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  // Eliminar tarea
  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
