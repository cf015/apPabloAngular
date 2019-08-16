import { Component, OnInit } from '@angular/core';
import {ApiService} from '../servicios/api.service';
import {TestModel} from '../servicios/test.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

	arrayTestModel : Array<TestModel>;

  constructor( public serviceTest: ApiService) { }

  ngOnInit() {

  	this.arrayTestModel = new Array<TestModel>();
  	this.getTest();
  }

   getTest(){
    this.serviceTest.getTest().subscribe(
        response => {
          console.log(response);
          this.arrayTestModel = response['message'];
        },
        error =>{}
      )
    }


}
