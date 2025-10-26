import { Component } from '@angular/core';
import { Task } from './models/task.model';
import { TaskFilterComponent } from './components/task-filter/task-filter.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AddTaskModalComponent, NewTask } from './components/add-task-modal/add-task-modal.component';
import { DeleteTaskModalComponent } from './components/delete-task-modal/delete-task-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TaskFilterComponent,
    TaskListComponent,
    AddTaskModalComponent,
    DeleteTaskModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'junior-frontend-developer-task';
  public showModal: boolean = false;
  public formSubmitted: boolean = false;
  public newTask: NewTask = {
    name: '',
    date: '',
    description: '',
    status: 'Planned'
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
  }

  togglePending(task: Task): void {
    if (task.status === 'Completed') {
      return;
    }
    task.status = task.status === 'Pending' ? 'Planned' : 'Pending';
  }

  toggleDescription(task: Task): void {
    task.descriptionVisible = !task.descriptionVisible;
  }

  deleteTask(index: number): void {
    this.taskToDelete = index;
    this.showDeleteModal = true;
  }

  confirmDelete(): void {
    if (this.taskToDelete > -1) {
      this.tasks.splice(this.taskToDelete, 1);
    }
    this.cancelDelete();
  }

  cancelDelete(): void {
    this.showDeleteModal = false;
    this.taskToDelete = -1;
  }

  openModal(): void {
    this.showModal = true;
    this.formSubmitted = false;
  }

  closeModal(): void {
    this.showModal = false;
    this.resetForm();
  }

  resetForm(): void {
    this.newTask = {
      name: '',
      date: '',
      description: '',
      status: 'Planned'
    };
    this.formSubmitted = false;
  }

  isFormValid(): boolean {
    if (!this.newTask.name.trim() || !this.newTask.date) {
      return false;
    }
    const selectedDate = new Date(this.newTask.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return selectedDate >= today;
  }

  saveTask(task: NewTask): void {
    this.formSubmitted = true;

    if (!this.isFormValid()) {
      return;
    }

    this.tasks.push({
      name: task.name.trim(),
      status: task.status,
      date: task.date,
      description: task.description.trim(),
      descriptionVisible: false
    });

    this.closeModal();
  }

  getFilteredTasks(): Task[] {
    return this.tasks.filter(task => {
      const matchesName = !this.filterName ||
        task.name.toLowerCase().includes(this.filterName.toLowerCase());
      const matchesDate = !this.filterDate || task.date === this.filterDate;
      const matchesStatus = this.filterStatus === 'all' || task.status === this.filterStatus;

      return matchesName && matchesDate && matchesStatus;
    });
  }

  clearFilters(): void {
    this.filterName = '';
    this.filterDate = '';
    this.filterStatus = 'all';
  }

  hasActiveFilters(): boolean {
    return this.filterName !== '' || this.filterDate !== '' || this.filterStatus !== 'all';
  }

  onFilterNameChange(value: string): void {
    this.filterName = value;
  }

  onFilterDateChange(value: string): void {
    this.filterDate = value;
  }

  onFilterStatusChange(value: string): void {
    this.filterStatus = value;
  }
}
