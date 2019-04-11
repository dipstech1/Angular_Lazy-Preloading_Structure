import { Component, OnInit } from '@angular/core';

import {TestService} from '../../core/services/test.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private t : TestService) { }

  ngOnInit() {
    this.t.doTest().subscribe(res => {
      console.log("///// ", res);
      
    })
  }

}
