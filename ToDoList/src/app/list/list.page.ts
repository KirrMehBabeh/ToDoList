import { Component, OnInit } from '@angular/core';

  import { Task } from '../models/task.inteface';
  import { Subscription } from 'rxjs';
  import { DataService } from '../data.service';
  
  @Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
  })
  export class ListPage implements OnInit {
    list:Array<Task> = [];
    listSub:Subscription;
    completed:boolean;
  
    constructor(
      private dataService:DataService
    ) { }
  
    ngOnInit() {
      this.listSub = this.dataService.list$.subscribe( taskData => this.list = taskData );
    }
  
    delete( itemStart ) {
      this.dataService.deleteFromList( itemStart );
    }

    completeTask(itemStart){
      this.dataService.setCompleted( itemStart );
      
    }
}
