import { Component, OnInit } from '@angular/core';
import {ApiService} from '../servicios/api.service';
import {TestModel} from '../servicios/test.model';	

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

	arrayTestModel : Array<TestModel>;	

  constructor(public serviceTest: ApiService) { }

  ngOnInit() {
  	this.arrayTestModel = new Array<TestModel>();
  	this.getListTest();
  }

   getListTest(){

   	let data = {
   		"id": "2"
   	}

    this.serviceTest.getTestList(data).subscribe(
        response => {
          console.log(response);
          //this.arrayTestModel = response['message'];
        },
        error =>{}
      )
    }

}
