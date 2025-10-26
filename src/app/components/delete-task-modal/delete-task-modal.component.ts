import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-task-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-task-modal.component.html',
  styleUrl: './delete-task-modal.component.scss'
})
export class DeleteTaskModalComponent {
  @Input() show: boolean = false;

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm(): void {
    this.confirm.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
