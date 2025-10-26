import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskCardComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  @Input({ required: true }) tasks: Task[] = [];
  @Input() totalTasks: number = 0;

  @Output() toggleCompleted = new EventEmitter<Task>();
  @Output() togglePending = new EventEmitter<Task>();
  @Output() toggleDescription = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<number>();
  @Output() clearFilters = new EventEmitter<void>();

  onToggleCompleted(task: Task): void {
    this.toggleCompleted.emit(task);
  }

  onTogglePending(task: Task): void {
    this.togglePending.emit(task);
  }

  onToggleDescription(task: Task): void {
    this.toggleDescription.emit(task);
  }

  onDeleteTask(index: number): void {
    this.deleteTask.emit(index);
  }

  onClearFilters(): void {
    this.clearFilters.emit();
  }
}
