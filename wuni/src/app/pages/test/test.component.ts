import { Component, OnInit } from '@angular/core';
import { BlockchainqueriesService } from 'src/app/service/blockchainqueries.service';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private bl: BlockchainqueriesService) { }

  ngOnInit() {
  }


  andar(){

   alert("MADA");

  }
}

