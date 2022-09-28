import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  coinSymbol: string[] = ['MXN','AUD','BRL','CAD','CNY','EUR','GBP'];

  public formLogin!: FormGroup;
  
  public dateCoin!: string; // Última actualización
  public nativeCoin!: number;

  public allRates!: any[];

  public availableCoins: any[]= [];

  public showResults: boolean = false;

  constructor(public requestService: RequestService) {}

  ngOnInit(): void {
    this.getData();

    //this.getData2();

    this.formLogin = new FormGroup({
      money: new FormControl('',Validators.pattern("^[0-9]*$"))
    });
  }

  getData(){
    let pressButton = document.getElementById('btn')

    pressButton?.addEventListener( "click", () => {
      let total = this.formLogin.get('money')?.value;
      this.requestService.getForeignExchange('USD',total).subscribe({
        next: (resp: any) => {

          this.dateCoin = resp.date;
          this.nativeCoin = resp.amount;
          this.allRates = Object.entries(resp.rates);
          this.showResults = !this.showResults;

          for(let i=0; i<this.allRates.length; i++)
            for(let j=0; j<this.coinSymbol.length; j++)
              if(this.allRates[i][0] == this.coinSymbol[j])
                this.availableCoins.push(this.allRates[i])
        }
      })
    })   
 
    
  }
  /*
  getData2(): void{
    //let total = this.formLogin.get('money');
    //console.log(total);
    this.requestService.getForeignExchange('USD',1).subscribe({
      next: (resp: any) => {

        this.dateCoin = resp.date;
        this.nativeCoin = resp.amount;
        this.allRates = Object.entries(resp.rates);
        this.showResults = !this.showResults;

        for(let i=0; i<this.allRates.length; i++)
          for(let j=0; j<this.coinSymbol.length; j++)
            if(this.allRates[i][0] == this.coinSymbol[j])
              this.availableCoins.push(this.allRates[i])
      }
    })
  }*/  

}
