import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  apiUrl: string = 'http://ghosteacher.com/apis/heroes.php';

//error handle

private handleError(error: HttpErrorResponse){
  return throwError("");
}

  getHeros(name?: string): Observable<Hero[]>{

    // Returns an Observable array of heroes from the Heroes` API

    if(name){
      return this.http.get<Hero[]>(this.apiUrl + `?name=${name}`).pipe(catchError(this.handleError) );
    }
    return this.http.get<Hero[]>(this.apiUrl).pipe( catchError(this.handleError) );
  }

  constructor(
    private http: HttpClient
  ) { }
}
