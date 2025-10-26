import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Task } from './models/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [NgClass, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  public title = 'junior-frontend-developer-task';
  public showModal: boolean = false;
  private formSubmitted: boolean = false;
  public newTask = {
    name: '',
    date: '',
    description: '',
    status: 'Planned' as 'Completed' | 'Pending' | 'Planned'
  };
  public showDeleteModal: boolean = false;
  public taskToDelete: number = -1;
  public filterName: string = '';
  public filterDate: string = '';
  public filterStatus: string = 'all';

  public tasks: Task[] = [
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

  togglePending(task: Task): void {
    if (task.status === 'Completed') {
      return;
    }
    task.status = task.status === 'Pending' ? 'Planned' : 'Pending';
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

  deleteTask(index: number): void {
    this.taskToDelete = index;
    this.showDeleteModal = true;
  };

  confirmDelete(): void {
    if (this.taskToDelete > -1) {
      this.tasks.splice(this.taskToDelete, 1);
    };
    this.cancelDelete();
  };

  cancelDelete(): void {
    this.showDeleteModal = false;
    this.taskToDelete = -1;
  };

  openModal(): void {
    this.showModal = true;
    this.formSubmitted = false;
  };

  closeModal(): void {
    this.showModal = false;
    this.resetForm();
  };

  resetForm(): void {
    this.newTask = {
      name: '',
      date: '',
      description: '',
      status: 'Planned'
    };
    this.formSubmitted = false;
  };

  isFormValid(): boolean {
    if (!this.newTask.name.trim() || !this.newTask.date) {
      return false;
    };
    const selectedDate = new Date(this.newTask.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return selectedDate >= today;
  };

  getTodayDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  saveTask(): void {
    this.formSubmitted = true;

    if (!this.isFormValid()) {
      return;
    };

    this.tasks.push({
      name: this.newTask.name.trim(),
      status: this.newTask.status,
      date: this.newTask.date,
      description: this.newTask.description.trim(),
      descriptionVisible: false
    });

    this.closeModal();
  };

  hasError(field: 'name' | 'date'): boolean {
    if (!this.formSubmitted) {
      return false;
    };

    if (field === 'name') {
      return !this.newTask.name.trim();
    };

    if (field === 'date') {
      if (!this.newTask.date) {
        return true;
      };
      const selectedDate = new Date(this.newTask.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate < today;
    };

    return false;
  };

  getFilteredTasks(): Task[] {
    return this.tasks.filter(task => {
      const matchesName = !this.filterName ||
        task.name.toLowerCase().includes(this.filterName.toLowerCase());
      const matchesDate = !this.filterDate || task.date === this.filterDate;
      const matchesStatus = this.filterStatus === 'all' || task.status === this.filterStatus;

      return matchesName && matchesDate && matchesStatus;
    });
  };

  clearFilters(): void {
    this.filterName = '';
    this.filterDate = '';
    this.filterStatus = 'all';
  };

  hasActiveFilters(): boolean {
    return this.filterName !== '' || this.filterDate !== '' || this.filterStatus !== 'all';
  };
};