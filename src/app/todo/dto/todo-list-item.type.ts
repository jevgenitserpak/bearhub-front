export class TodoListDto {
  id: number;
  title: string;
  description: string;
  created: Date;
  items: Array<TodoListItem>;
  open: boolean;
}

export class TodoListItem {
  check: boolean;
  text: string;
  orderNr: number;
}
