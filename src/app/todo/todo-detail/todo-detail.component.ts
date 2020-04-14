import { Component, OnInit } from '@angular/core';

import {TodoListDto, TodoListItem} from '../dto/todo-list-item.type';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  dto = new TodoListDto();

  constructor() { }

  ngOnInit(): void {
    console.log('test111');
  }

  addTodoItem() {
    console.log('test');
    if (this.dto.items === undefined) {
      this.dto.items = new Array<TodoListItem>();
    }
    const item = new TodoListItem();
    this.dto.items.push(item);
  }

  deleteItem(item: TodoListItem) {
    const index = this.dto.items.indexOf(item);
    this.dto.items.splice(index, 1);
  }
}
