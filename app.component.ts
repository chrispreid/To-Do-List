import { Component } from '@angular/core';

interface Todo {
  task: string;
  complete: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class TodoComponent {
  title = 'ToDo List';

  newtask = '';

  
  todoList: Todo[] = [
    { task: 'Walk the Dog', complete: false } ,
    { task: 'Go to Store', complete: true },
    { task: 'Get Gas', complete: false },
    { task: 'Wash the Car', complete: false },
  ];

  filter: string;
  filteredTodoList = [...this.todoList];

  filterTasks() {
    this.filteredTodoList = this.todoList.filter(
      item => item.task.toLowerCase().indexOf(this.filter.toLowerCase()) > -1   
    )

    if (!this.filter) {
      this.filteredTodoList = [...this.todoList];
    }
  }

  add() {
    const newItem: Todo = {
      task: this.newtask,
      complete: false,
    }
    this.todoList.push(newItem);
    this.filteredTodoList = [...this.todoList];
    this.newtask = null;
  }

  completeTask(todoList: Todo) {
    todoList.complete = !todoList.complete
  }

  remove(todoList: Todo) {
    const index: number = this.todoList.indexOf(todoList, 0);
    if (index !== -1) {
      this.todoList.splice(index, 1);
      this.filteredTodoList = [...this.todoList];
    }
  }





}