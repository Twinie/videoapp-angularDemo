import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor() { }

  color='red';
  counter=0;
  incr():number{
    return this.counter++;
  }
  ngOnInit(): void {
  }

}
