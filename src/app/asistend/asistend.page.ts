import { Component, OnInit } from '@angular/core'; 
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';


@Component({
  selector: 'app-asistend',
  templateUrl: './asistend.page.html',
  styleUrls: ['./asistend.page.scss'],
})
export class AsistendPage implements OnInit {

  constructor(private speechRecognition: SpeechRecognition) {}

  startListening() {
    this.speechRecognition.startListening()
      .subscribe(
        (matches: string[]) => {
          // Procesar las palabras reconocidas (puedes implementar la lógica de tu asistente virtual aquí)
          console.log(matches);
        },
        (onerror: any) => console.log('error:', onerror)
      );
  }

  stopListening() {
    this.speechRecognition.stopListening();
  }

  ngOnInit() {
  }

}
