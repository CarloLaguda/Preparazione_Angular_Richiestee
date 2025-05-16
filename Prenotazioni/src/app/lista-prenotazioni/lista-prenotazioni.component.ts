import { Component, Input } from '@angular/core';
import { Prenotation } from '../models/Prenotation.model';
import { CommonModule, DatePipe, JsonPipe } from '@angular/common';
import { DettagliPrenotazioneComponent } from '../dettagli-prenotazione/dettagli-prenotazione.component';

@Component({
  selector: 'app-lista-prenotazioni',
  imports: [DettagliPrenotazioneComponent,CommonModule, DatePipe],
  templateUrl: './lista-prenotazioni.component.html',
  styleUrl: './lista-prenotazioni.component.css'
})
export class ListaPrenotazioniComponent {
  @Input() prenotazione!: Prenotation
  dettagli: boolean = false
  visualizza_dettagli(): boolean
  {
    this.dettagli = !this.dettagli
    return false
  }
}
