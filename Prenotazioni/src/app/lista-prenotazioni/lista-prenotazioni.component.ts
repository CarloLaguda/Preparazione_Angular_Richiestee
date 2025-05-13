import { Component, Input } from '@angular/core';
import { Prenotation } from '../models/Prenotation.model';

@Component({
  selector: 'app-lista-prenotazioni',
  imports: [],
  templateUrl: './lista-prenotazioni.component.html',
  styleUrl: './lista-prenotazioni.component.css'
})
export class ListaPrenotazioniComponent {
  @Input() prenotazione: Prenotation = new Prenotation("", "", "", 0, "", "", "")
}
