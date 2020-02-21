import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formation } from './formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  configUrl = 'http://localhost:3000/formations';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    })
  };

  constructor(private http: HttpClient) {}

  getFormations() {
    return this.http.get<Formation[]>(this.configUrl);
  }

  addFormation(formation: Formation): Observable<Formation> {
    return this.http.put<Formation>(
      this.configUrl + '/' + formation.id,
      formation,
      this.httpOptions
    );
  }
}
