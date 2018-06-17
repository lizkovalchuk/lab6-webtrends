import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Lab6 } from '../lab6';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Lab6Service {
  apiUrl: string = 'http://romanovska.ca/AJAXhmwk/Assign5-A-LizKovalchuk/week6-lab/exampleAPI.php?api_key=banana';
  
  getLab(id?: number) : Observable<Lab6[]>{
    if(id){
      return this.http.get<Lab6[]>(this.apiUrl + `&id=${id}`);
    }
    return this.http.get<Lab6[]>(this.apiUrl);
  }
  
  constructor(
    private http: HttpClient
  ) { }
}
