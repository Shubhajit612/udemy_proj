import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  [x: string]: any;
  // newServerName = '';
  // newServerContent = '';

  
  @ViewChild('serverContentInput',{static:true})serverContentInput: ElementRef;

  @Output()serverCreated= new EventEmitter<{serverName:string,serverContent:string}>();
  @Output()blueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>();


  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput:HTMLInputElement) {
    console.log(this.serverContentInput);
    // console.log(nameInput);
     this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value,
     });
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.serverContentInput.nativeElement.value="Hello bhai";
    this.blueprintCreated.emit(
      {serverName:nameInput.value,
        serverContent:this.serverContentInput.nativeElement.value,
      });
  }

}
