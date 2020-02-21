import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Experience } from "src/app/component/experience/experience";

@Injectable({
  providedIn: "root"
})
export class ExperienceService {
  configUrl = "http://localhost:3000/experiences";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=UTF-8"
    })
  };

  constructor(private http: HttpClient) {}

  getExperience(id) {
    return this.http.get<Experience>(this.configUrl + "/" + id);
  }

  getExperiences() {
    return this.http.get<Experience[]>(this.configUrl);
  }

  addExperience(experiences: Experience[]): Observable<boolean> {
    experiences.forEach(experience => {
      this.http.post<Experience>(this.configUrl, experience, this.httpOptions);
    });
    return of(true);
  }
}
