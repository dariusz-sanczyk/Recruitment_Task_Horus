import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  imports: [NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'junior-frontend-developer-task';

  protected tasks: Task[] = [
    {
      name: 'Zrobić zakupy spożywcze',
      status: 'Completed',
      date: '2025-05-01',
      description: 'Muszę kupić mleko, mąkę i jajka.',
      descriptionVisible: false
    },
    {
      name: 'Opłacić rachunki',
      status: 'Pending',
      date: '2025-05-10',
      description: 'Tylko nie odkładaj tego na inny dzień!',
      descriptionVisible: false
    },
    {
      name: 'Urodziny mamy',
      status: 'Planned',
      date: '2025-05-15',
      description: 'Kupić kwiaty i tort.',
      descriptionVisible: false
    }
  ];

  toggleCompleted(task: Task): void {
    task.status = task.status === 'Completed' ? 'Planned' : 'Completed';
  };

  toggleDescription(task: Task): void {
    task.descriptionVisible = !task.descriptionVisible;
  };

  getStatusClass(status: string): string {
    const statusClasses: { [key: string]: string } = {
      'Completed': 'status-completed',
      'Pending': 'status-pending',
      'Planned': 'status-planned'
    };
    return statusClasses[status] || 'status-planned';
  };

  getStatusText(status: string): string {
    const statusTexts: { [key: string]: string } = {
      'Completed': 'Ukończone',
      'Pending': 'W trakcie',
      'Planned': 'Zaplanowane'
    };
    return statusTexts[status] || status;
  };
};