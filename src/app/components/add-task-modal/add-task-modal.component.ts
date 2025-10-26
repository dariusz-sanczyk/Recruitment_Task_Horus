import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface NewTask {
  name: string;
  date: string;
  description: string;
  status: 'Completed' | 'Pending' | 'Planned';
}

@Component({
  selector: 'app-add-task-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task-modal.component.html',
  styleUrl: './add-task-modal.component.scss'
})
export class AddTaskModalComponent {
  @Input() show: boolean = false;
  @Input() newTask: NewTask = {
    name: '',
    date: '',
    description: '',
    status: 'Planned'
  };
  @Input() formSubmitted: boolean = false;

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<NewTask>();
  @Output() taskChange = new EventEmitter<NewTask>();

  onClose(): void {
    this.close.emit();
  }

  onSave(): void {
    this.save.emit(this.newTask);
  }

  getTodayDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  hasError(field: 'name' | 'date'): boolean {
    if (!this.formSubmitted) {
      return false;
    }

    if (field === 'name') {
      return !this.newTask.name.trim();
    }

    if (field === 'date') {
      if (!this.newTask.date) {
        return true;
      }
      const selectedDate = new Date(this.newTask.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate < today;
    }

    return false;
  }

  onTaskPropertyChange(property: keyof NewTask, value: string): void {
    this.newTask[property] = value as any;
    this.taskChange.emit(this.newTask);
  }
}
