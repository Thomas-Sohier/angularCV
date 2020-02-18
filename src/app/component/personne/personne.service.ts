import { Injectable } from '@angular/core';
import { Personne } from 'src/app/component/personne/personne';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  configUrl = 'http://localhost:3000/personnes';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    })
  };

  constructor(private http: HttpClient) {}

  getPersonne(id) {
    return this.http.get<Personne>(this.configUrl + '/' + id);
  }

  getPersonnes() {
    return this.http.get<Personne[]>(this.configUrl);
  }

  addPersonne(personne: Personne): Observable<Personne> {
    return this.http.put<Personne>(this.configUrl + '/' + personne.id, personne, this.httpOptions);
  }
}
