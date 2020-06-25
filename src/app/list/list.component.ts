import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public myName : HomeComponent) { }
  // mynameis = this.myName.name;
  // test = new HomeComponent();
  // testname = this.test.name ;
  ngOnInit() {
  	//    this.route.paramMap.subscribe(x => {
   // this.product = products[Number(x.get('productId'))];
   // this.product = products[0]

  }

}
