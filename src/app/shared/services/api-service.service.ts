import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExecRes } from '../interfaces/exec-res';



const BASE_URL = 'http://localhost:5000/api';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }


  execCode(lang:string,code:string){
    return this.http.post<ExecRes>(BASE_URL+"/exec",{"lang":lang,"code":code});
  }
}
