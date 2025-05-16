import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prenotation, Response } from './models/Prenotation.model';
import { CommonModule, DatePipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ListaPrenotazioniComponent, JsonPipe, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Prenotazioni';
  //Oggetti classe prenottation
  prenotazioni : Prenotation[] = []
  oPrenotazioni! : Observable<Prenotation[]>;
  dati_post: Object =  JSON.stringify({})// Dati per la post
  obsPost = new Observable<Response>;
  prenotazione!: Prenotation 

  //Oggetti per chiamate http
  http: HttpClient;
  data!: Object;
  loading!: boolean;

  a: string = "10/11/12"
  b:string = "10/11/12"
  messaggio!:string
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
  
  makePost(nome: HTMLInputElement, cognome: HTMLInputElement, indirizzo: HTMLInputElement, telefono: HTMLInputElement, email: HTMLInputElement, data: HTMLInputElement, ora:HTMLInputElement): void
  {
    const dataValue = new Date(data.value);
    this.loading = true
    this.dati_post = JSON.stringify({
      nome: nome.value,
      cognome: cognome.value,
      indirizzo: indirizzo.value,
      telefono: telefono.value,
      email: email.value,
      data: dataValue,
      ora: ora.value
    })
    this.prenotazione = new Prenotation(nome.value, cognome.value, indirizzo.value, Number(telefono.value), email.value, dataValue , Number(ora.value))


    this.obsPost = this.http.post<Response>("https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni", this.dati_post)
    this.obsPost.subscribe(this.postData)
    nome.value = ""
    cognome.value = ""
    indirizzo.value = ""
    telefono.value = ""
    email.value = ""
    data.value = ""
    ora.value = ""
  }

  postData = (data: Response) =>
  {
    console.log(this.a == this.b)
    this.data = data;
    console.log(this.data)
    this.loading = false
    this.messaggio = "Prenotazione eseguita"

    if(data.id > 0 )
    {
      this.prenotazioni.push(this.prenotazione);
    }

  }

  ngOnInit() 
  {
    this.makeRequest()
  }
}
