import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  // key is the class to add, value is the conditional (true or false)
  setClasses() {
    return { 'is-complete': this.todo.completed };
  }

  onToggle(item) {
    // toggle in UI
    item.completed = !item.completed
    // toggle on server
    this.todoService.toggleCompleted(item).subscribe(todo => {
      console.log(todo);
    });
  }

  onDelete(item) {
    this.deleteTodo.emit(item);
  }
}
