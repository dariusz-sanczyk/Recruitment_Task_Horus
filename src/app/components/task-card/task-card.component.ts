import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input({ required: true }) task!: Task;
  @Input({ required: true }) index!: number;
  
  @Output() toggleCompleted = new EventEmitter<Task>();
  @Output() togglePending = new EventEmitter<Task>();
  @Output() toggleDescription = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<number>();

  getStatusClass(status: string): string {
    const statusClasses: { [key: string]: string } = {
      'Completed': 'status-completed',
      'Pending': 'status-pending',
      'Planned': 'status-planned'
    };
    return statusClasses[status] || 'status-planned';
  }

  getStatusText(status: string): string {
    const statusTexts: { [key: string]: string } = {
      'Completed': 'Ukończone',
      'Pending': 'W trakcie',
      'Planned': 'Zaplanowane'
    };
    return statusTexts[status] || status;
  }

  onToggleCompleted(): void {
    this.toggleCompleted.emit(this.task);
  }

  onTogglePending(): void {
    this.togglePending.emit(this.task);
  }

  onToggleDescription(): void {
    this.toggleDescription.emit(this.task);
  }

  onDelete(): void {
    this.deleteTask.emit(this.index);
  }
}
