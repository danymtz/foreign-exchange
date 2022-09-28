import { Component, OnInit } from '@angular/core';
import { RequestService } from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'divisas';

  dateCoin!: string;
  coinValue!: number; 

  constructor(public requestService: RequestService) {}

  ngOnInit(): void {
    this.getButton();
  }

  getButton(){
    let pushButton = document.getElementById('btn');

    pushButton?.addEventListener( "click", () => {
      this.requestService.getForeignExchange('USD').subscribe({
        next: (resp: any) => {
          this.dateCoin = resp.date;
          this.coinValue = resp.MXN;
        }
      })
    });
  }
}
