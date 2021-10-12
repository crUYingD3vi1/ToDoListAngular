import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-body-component',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.css']
})
export class BodyComponentComponent implements OnInit {
 @Input()
 Items!: String;



  constructor() { }

  ngOnInit(): void {
  }

}
