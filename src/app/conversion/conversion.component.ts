import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversion',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './conversion.component.html',
  styleUrl: './conversion.component.css'
})
export class ConversionComponent {
  meters: number=0;
  feet: number=0;
  celsius: number=0;
  fahrenheit: number=0;

  constructor() { }

  convertLength() {
    this.feet = this.meters * 3.28084;
  }

  convertTemperature() {
    this.fahrenheit = this.celsius * 9/5 + 32;
  }

}
