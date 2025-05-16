import { Component, Input } from '@angular/core';
import { Prenotation } from '../models/Prenotation.model';

@Component({
  selector: 'app-dettagli-prenotazione',
  imports: [],
  templateUrl: './dettagli-prenotazione.component.html',
  styleUrl: './dettagli-prenotazione.component.css'
})
export class DettagliPrenotazioneComponent {
  @Input() singoli_dettagli!:Prenotation
}
