import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
 @Input('baba')element:{type:string,name:string,content:string};

  constructor() {
    console.log('constructor called..!!');
   }

  ngOnInit(): void {
    console.log('ngOnInit called..!!');
  }

}