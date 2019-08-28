import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Information } from 'src/app/information';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  configUrl = 'http://localhost:3000/informations';

  constructor(private http: HttpClient) {}

  getInformation() {
    return this.http.get<Information>(this.configUrl);
  }

  addInformation(information: Information): Observable<Information> {
    return this.http.post<Information>(this.configUrl, information);
  }
}
