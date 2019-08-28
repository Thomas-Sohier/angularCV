import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Formations } from 'src/app/formation';
import { Observable } from 'rxjs';

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

  getFormation(id) {
    return this.http.get<Formations>(this.configUrl + '/' + id);
  }

  getFormations() {
    return this.http.get<Formations[]>(this.configUrl);
  }

  addFormation(formation: Formations): Observable<Formations> {
    return this.http.put<Formations>(
      this.configUrl + '/' + formation.id,
      formation,
      this.httpOptions
    );
  }
}
