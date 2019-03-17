import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goTo(){

    this.router.navigate(['courseDetail']);
  }

}
