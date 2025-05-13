import { Component, Input } from '@angular/core';
import { Prenotation } from '../models/Prenotation.model';
import { DettagliPrenotazioneComponent } from '../dettagli-prenotazione/dettagli-prenotazione.component';

@Component({
  selector: 'app-lista-prenotazioni',
  imports: [DettagliPrenotazioneComponent],
  templateUrl: './lista-prenotazioni.component.html',
  styleUrl: './lista-prenotazioni.component.css'
})
export class ListaPrenotazioniComponent {
  @Input() prenotazione: Prenotation = new Prenotation("", "", "", 0, "", "", "")
  dettagli: boolean = false
  visualizza_dettagli(): boolean
  {
    this.dettagli = !this.dettagli
    return false
  }
}
