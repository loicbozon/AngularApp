import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  standalone: true,
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TaskListComponent {


  name = ''
  tasks = [
    {
      name: 'faire truc 1',
      status: 'todo'
    },
    {
      name: 'faire truc 2',
      status: 'done'
    },
    {
      name: 'faire truc 3',
      status: 'in progress'
    },
  ];


  getTodos() {
    return this.tasks.filter(x => x.status == 'todo')
  }
  getInProgress() {
    return this.tasks.filter(x => x.status == 'in progress')
  }
  getDone() {
    return this.tasks.filter(x => x.status == 'done')
  }


  onSubmit() {
    if (this.name !== '') {
      const data = {
        name: this.name,
        status: 'todo'
      }
      this.tasks.push(data)
      this.name = ''
    }
  }

  changeStatus(name: string, status: string) {
    const task = this.tasks.find(x => x.name == name)
    if (task) {
      task.status = status
    }
  }

  remove(name: string) {
    this.tasks = this.tasks.filter(x => x.name !== name)
  }
}
