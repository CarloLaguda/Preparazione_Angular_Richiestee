import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prenotation } from './models/Prenotation.model';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ListaPrenotazioniComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Prenotazioni';
  //Oggetti classe prenottation
  prenotazioni : Prenotation[] = []
  oPrenotazioni! : Observable<Prenotation[]>;
  //Oggetti per chiamate http
  http: HttpClient;
  data!: Object;
  loading!: boolean;

  //Inizializzo l'oggetto HTTP
  constructor(http: HttpClient)
  {
    this.http = http
  }
  

  makeRequest(): void
  {
    this.loading = true
    this.oPrenotazioni = this.http.get<Prenotation[]>("https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni")
    this.oPrenotazioni.subscribe(this.getData);
  }

  getData = (data : Prenotation[]) => 
  {
    this.prenotazioni = data;
    console.log(this.prenotazioni)
    this.loading = false
  }
  
  ngOnInit() 
  {
    this.makeRequest()
  }
}
