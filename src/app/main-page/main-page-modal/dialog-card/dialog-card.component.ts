import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.scss']
})
export class DialogCardComponent implements OnInit {
  
  @Input()
  IconName!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
