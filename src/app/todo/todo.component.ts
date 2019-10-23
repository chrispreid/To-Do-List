import { Component } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'todo-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  title = 'ToDo List';

  numbers = [1, 2, 3, 4];

  
  todoList: Todo[] = [
    { task: 'Walk the Dog', completed: false } ,
    { task: 'Go to Store', completed: true },
    { task: 'Get Gas', completed: false },
    { task: 'Wash the Car', completed: false },
  ];

}
