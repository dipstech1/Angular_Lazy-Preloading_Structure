import { Component, OnInit } from '@angular/core';
import {Test2Service} from '../../core/services/test2.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private t2:Test2Service) { }

  ngOnInit() {
    this.t2.doTest().subscribe(res => {
      console.log("///// ", res);
      
    })
  }

}
