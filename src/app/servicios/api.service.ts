import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

	private baseUrl = "http://172.16.24.16:8000/api";

  constructor(private http: HttpClient) {}

    getTest(){

      return this.http.get(`${this.baseUrl}/test`);
    }

     getTestList(data){

      return this.http.post(`${this.baseUrl}/listTest`,data);
    }
}
