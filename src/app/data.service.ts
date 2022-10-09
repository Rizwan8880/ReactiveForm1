import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HttpClient } from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( public _http : HttpClient ) { 

  }

  addUser(data){
    console.log("data", data)
    return this._http.post("https://633c356174afaef164045b22.mockapi.io/employee",data)
  }

  updateUser( id , data){
    return this._http.put("https://633c356174afaef164045b22.mockapi.io/employee/"+id,data)
  }
  getListUser(){
    return this._http.get("https://633c356174afaef164045b22.mockapi.io/employee")
  }
  getUserDetails(id){
    return this._http.get("https://633c356174afaef164045b22.mockapi.io/employee/"+id)
  }
  deleteUser(id){
    return this._http.delete("https://633c356174afaef164045b22.mockapi.io/employee/"+id)
  }

  
  
}
 