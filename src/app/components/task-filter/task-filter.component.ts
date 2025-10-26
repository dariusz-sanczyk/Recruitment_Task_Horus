import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.scss'
})
export class TaskFilterComponent {
  @Input() filterName: string = '';
  @Input() filterDate: string = '';
  @Input() filterStatus: string = 'all';
  @Input() hasActiveFilters: boolean = false;

  @Output() filterNameChange = new EventEmitter<string>();
  @Output() filterDateChange = new EventEmitter<string>();
  @Output() filterStatusChange = new EventEmitter<string>();
  @Output() clearFilters = new EventEmitter<void>();

  onFilterNameChange(value: string): void {
    this.filterNameChange.emit(value);
  }

  onFilterDateChange(value: string): void {
    this.filterDateChange.emit(value);
  }

  onFilterStatusChange(value: string): void {
    this.filterStatusChange.emit(value);
  }

  onClearFilters(): void {
    this.clearFilters.emit();
  }
}
