import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('myTest', {static: true}) myTest: ElementRef; //second name is just a placeholder
  @ViewChild('myInput', {static:true}) myInput: ElementRef;

  submitted: boolean = false;
  private name="serri";
	 info = new FormGroup({
   firstName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
   lastName: new FormControl(''),
   age: new FormControl(''),
   email:new FormControl(''),
 });

	students = [{
		name: "test1",
		age: 30
	},{
		name: "test2",
		age: 44
	},{
		name: "test3",
		age: 20
	}]

  constructor() {
  }



  counter: number = 0;
  printInConsole(){
  	this.counter++;
  	console.log(this.counter);
  }

  onSubmit(){
    this.submitted = true;
    if(this.info.valid){
     var a = this.info.value;
     console.log(a);
     this.info.reset();
     this.submitted = false;
     // console.log(this.sumbitted)
    }
 // to take the values from the form you can select the property that have the formGroup and then just add .value
   
 }

  test(){
  	console.log("Serri");
  }

  ngOnInit() {
        console.log(this.myTest);
        this.myTest.nativeElement.innerHTML = "I am changed by ElementRef & ViewChild";
        this.myInput.nativeElement.value = this.myTest.nativeElement.innerHTML;
        this.myTest.nativeElement.style.backgroundColor = 'Red';

  }

}

// var firstname = ""

// var lastname= "serri";
// if(lastname == "serri"){
// 	firstname = "ghiath";
// }else {
// 	firstname = "none";
// }

// firstname = (lastname == "serri") ? "ghiath" : "none";