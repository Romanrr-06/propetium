// ruleta.page.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'; 
interface CryptoOption {
  id: number;
  name: string;
  tipo: string;
  probabilidad: string;
  angle?: number; 
}

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.page.html',
  styleUrls: ['./ruleta.page.scss'],
})
export class RuletaPage implements OnInit {
  public data: CryptoOption[] = [];
  public rotation = 0;
  public nombreAleatorio: string | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.http.get<CryptoOption[]>(environment.backend_host + '/crypto').subscribe((data) => {
      this.data = this.calculateRotationAngles(data.filter(option => option.name !== 'bat'));
   console.log ('')
    });
  }

  calculateRotationAngles(data: CryptoOption[]) {
    const totalOptions = data.length;
    const anglePerOption = 360 / totalOptions;

    return data.map((option, index) => ({
      ...option,
      angle: index * anglePerOption,
    }));
  }

  obtenerNombreAleatorio() {
    const randomIndex = Math.floor(Math.random() * this.data.length);
    this.nombreAleatorio = this.data[randomIndex].name;
  }
}
