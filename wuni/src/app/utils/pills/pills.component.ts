import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-pills-wuni',
  templateUrl: './pills.component.html',
  styleUrls: ['./pills.component.css']
})
export class PillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  saluda(){
    alert("SE");
  }
}
