import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Experience } from "src/app/component/experience/experience";

@Injectable({
  providedIn: "root"
})
export class ExperienceService {
  configUrl = "http://localhost:3000/Experience";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=UTF-8"
    })
  };

  constructor(private http: HttpClient) {}

  getExperience(id) {
    return this.http.get<Experience[]>(this.configUrl + "/" + id);
  }

  addExperience(experience: Experience): Observable<Experience> {
    return this.http.put<Experience>(
      this.configUrl + "/" + experience.id,
      experience,
      this.httpOptions
    );
  }
}
