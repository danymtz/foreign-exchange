import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient : HttpClient) { }

  getForeignExchange(coin: string, num: number){
    return this.httpClient.get(`https://www.frankfurter.app/latest?from=${coin}&&amount=${num}`).pipe(
      map((resp: any) => {
        return {
          date: resp.date,
          amount: resp.amount,
          rates: resp.rates
        }
      })
    );
  } 
}
