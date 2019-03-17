import { Component, OnInit } from '@angular/core';
import { BlockchainQueriesService } from 'src/app/service/blockchain-queries.service';


@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private gonza:BlockchainQueriesService) { }

  ngOnInit() {
  }


  andar(){

   //alert("MADA");
   this.gonza.addUniversity1("HOLA UNIVERSITY", 1);

  }
}
