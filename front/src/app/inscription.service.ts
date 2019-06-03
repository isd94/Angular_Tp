import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable()
export class InscriptionService {
url= 'http://localhost:3000';
  constructor(private http: HttpClient) { }

   public getEcoles() {
    let url1 = this.url + '/api/v1/ecoles';
     return this.http.get(url1).pipe(
        map((data: any[]) => data)
       );
   }

   public getTalent() {
     let urlt = this.url + '/api/v1/talents';
     return this.http.get(urlt).pipe(
      map((data: any[]) => data)
     );
   }

   public saveTalent(talent) {
    let urlt = this.url + '/api/v1/talents';
     return this.http.post(urlt, talent);
   }
}
