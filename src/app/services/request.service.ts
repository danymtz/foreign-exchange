import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient : HttpClient) { }

  getForeignExchange(coin: string){
    return this.httpClient.get(`https://www.frankfurter.app/latest?from=${coin}`).pipe(
      map((resp: any) => {
        console.log(coin);
        return {
          date: resp.date,
          MXN: resp.rates.MXN
        }
      })
    );
  } 
}
