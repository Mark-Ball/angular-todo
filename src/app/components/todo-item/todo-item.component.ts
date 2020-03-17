import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() emitChecked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // key is the class to add, value is the conditional (true or false)
  setClasses() {
    return { 'is-complete': this.todo.completed };
  }

  // this only toggles the UI, not the actual data
  onToggle(item) {
    console.log('toggled');
    item.completed = !item.completed
  }

  onDelete(item) {
    console.log('deleted');
  }
}
