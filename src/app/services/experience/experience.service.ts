import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiences } from 'src/app/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  configUrl = 'http://localhost:3000/experiences';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    })
  };

  constructor(private http: HttpClient) {}

  getExperience(id) {
    return this.http.get<Experiences>(this.configUrl + '/' + id);
  }

  getExperiences() {
    return this.http.get<Experiences[]>(this.configUrl);
  }

  addExperience(experience: Experiences): Observable<Experiences> {
    return this.http.put<Experiences>(
      this.configUrl + '/' + experience.id,
      experience,
      this.httpOptions
    );
  }
}
