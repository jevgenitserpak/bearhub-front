import { Component, OnInit } from '@angular/core';
import {TodoListDto, TodoListItem} from './dto/todo-list-item.type';
import {Router} from '@angular/router';
import {TodoDetailComponent} from './todo-detail/todo-detail.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  panelOpenState = false;
  data = new Array<TodoListDto>();

  constructor(private router: Router) { }


  ngOnInit(): void {
    for (let j = 0; j < 5; j++) {
      const dto = new TodoListDto();
      dto.id = j + 1;
      dto.created = new Date();
      dto.open = false;
      dto.title = 'DTO: ' + dto.id;
      dto.items = new Array<TodoListItem>();
      for (let i = 0; i < 10; i++) {
        const item = new TodoListItem();
        item.check = false;
        item.orderNr = i + 1;
        item.text = 'item: ' + item.orderNr;
        dto.items.push(item);
      }
      this.data.push(dto);
    }
  }

  itemChecked(item: TodoListItem) {
    item.check = !item.check;
    console.log(item.check);
  }

  addNewToDo() {
    this.router.navigate([TodoDetailComponent]);
  }
}
