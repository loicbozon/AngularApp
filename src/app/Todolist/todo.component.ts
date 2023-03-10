import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";


@Component({
    standalone: true,
    selector: 'movie-dev-mobile',
    templateUrl: './todo.component.html',
    imports: [CommonModule],
    // styleUrls: ['./todo.component.scss'],
})

export class TodoComponent {


    addItem(description: string) {
        this.allItems.unshift({
          description,
          done: false
        });
    }
    
    title = 'todo';
    
    filter: 'all' | 'active' | 'done' = 'all';
    
    allItems = [
        { description: 'eat', done: true },
        { description: 'sleep', done: false },
        { description: 'play', done: false },
        { description: 'laugh', done: false },
    ];
    
    get items() {
        if (this.filter === 'all') {
        return this.allItems;
        }
        return this.allItems.filter((item) => this.filter === 'done' ? item.done : !item.done);
    }
      
}