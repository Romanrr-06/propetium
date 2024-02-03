import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AlertController } from '@ionic/angular';
interface Comentario {
  usuario: string;
  contenido: string;
  
}

interface Noticia {
  titulo: string;
  contenido: string;
  imagen: string;
  expanded: boolean;
  mostrarImagen: boolean;
  usuario: string;
  comentarios: Comentario[];
}

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage {

  noticias: Noticia[] = [
    {
      titulo: "Propetium-Coin Revoluciona el Mundo de las Criptomonedas con Innovador Enfoque Ecológico",
      contenido: "En una sorprendente y emocionante revelación, Propetium-Coin ha anunciado su entrada al mercado de criptomonedas con un enfoque revolucionario en sostenibilidad ambiental. Esta nueva moneda digital busca cambiar la percepción tradicional de las criptomonedas al abordar activamente las preocupaciones sobre el consumo energético y el impacto ambiental asociados con la minería de criptomonedas.\n\nPropetium-Coin ha adoptado un innovador mecanismo de consenso denominado 'Proof-of-Green', que premia a los mineros que utilizan fuentes de energía renovable. Este enfoque ha generado un gran interés en la comunidad criptográfica, ya que aborda las críticas ambientales que a menudo se asocian con otras criptomonedas.\n\nAdemás de su compromiso con la sostenibilidad, Propetium-Coin también ha implementado tecnologías de seguridad de última generación para proteger las transacciones y garantizar la integridad de la red.\n\nSu equipo de desarrollo está formado por expertos en blockchain y tecnologías descentralizadas, lo que aumenta la confianza en la viabilidad a largo plazo de la moneda.\n\nLa moneda se lanzó con un evento virtual que atrajo la atención de inversores y entusiastas de todo el mundo. Durante el lanzamiento, los fundadores de Propetium-Coin destacaron su compromiso con la transparencia y la participación comunitaria, prometiendo utilizar parte de los beneficios para iniciativas ecológicas y sociales.\n\nA medida que Propetium-Coin comienza a ganar tracción en los mercados, se espera que su enfoque ecológico atraiga a inversores éticos y concienciados con el medio ambiente. Esta nueva incorporación al mundo de las criptomonedas demuestra que la innovación y la sostenibilidad pueden ir de la mano, ofreciendo un enfoque prometedor para el futuro de las finanzas digitales.",
      imagen: 'url-a-la-imagen-propetium.jpg',
      expanded: false,
      mostrarImagen: false,
      usuario: 'Nombre de Usuario',
      comentarios: []
    },
    {
      titulo: "EtherVortex Anuncia Contrato Inteligente Revolucionario para Transacciones Instantáneas",
      contenido: "La criptomoneda EtherVortex ha revelado un contrato inteligente revolucionario que permite transacciones instantáneas. Esta innovación busca abordar los desafíos de escalabilidad enfrentados por muchas criptomonedas, ofreciendo una solución eficiente y rápida para los usuarios.",
      imagen: 'url-a-la-imagen-ethervortex.jpg',
      expanded: false,
      mostrarImagen: false,
      usuario: 'Nombre de Usuario',
      comentarios: []
    },
    {
      titulo: "SolarCoin Impulsa la Adopción de Energía Solar con Recompensas para Productores de Energía Verde",
      contenido: "SolarCoin, una criptomoneda centrada en la sostenibilidad, ha implementado un programa de recompensas para los productores de energía solar. Los usuarios que generan energía verde ahora pueden recibir SolarCoins como incentivo, fomentando la adopción de fuentes de energía renovable.",
      imagen: 'url-a-la-imagen-solarcoin.jpg',
      expanded: false,
      mostrarImagen: false,
      usuario: 'Nombre de Usuario',
      comentarios: []
    },
  ];
  currentIndex = 0;
  nuevoComentario: string = '';


  toggleNewsContent(index: number) {
    this.noticias.forEach((noticia, i) => {
      noticia.expanded = i === index && !noticia.expanded;
    });
  }

  toggleImage(index: number) {
    this.noticias[index].mostrarImagen = !this.noticias[index].mostrarImagen;
  }

  showNextNews() {
    this.currentIndex = (this.currentIndex + 1) % this.noticias.length;
  }

  constructor(public auth: AuthService, private alertController: AlertController) {}



  verificarPalabrasProhibidas(contenido: string) {
    const palabrasProhibidas = ['palabra1', 'palabra2', 'palabra3'];

    const contenidoMinusc = contenido.toLowerCase();

    const palabraProhibida = palabrasProhibidas.find(palabra => contenidoMinusc.includes(palabra));

    if (palabraProhibida) {
      this.mostrarAdvertencia(palabraProhibida);
    }
  }

  async mostrarAdvertencia(palabraProhibida: string) {
    const alert = await this.alertController.create({
      header: 'Advertencia',
      message: `Se ha detectado la palabra prohibida: ${palabraProhibida}.`,
      buttons: ['OK']
    });

    await alert.present();
  }

  agregarComentario(index: number, usuario: string, contenido: string) {
    this.verificarPalabrasProhibidas(contenido); // Llama a la función para verificar palabras prohibidas antes de agregar el comentario
    this.noticias[index].comentarios.push({ usuario, contenido });
  }


  // user foto 
  // user: any;
  // constructor(public auth: AuthService) {}

  // ngOnInit() {
  //   this.auth.user$.subscribe((user) => {
  //     console.log('User Data:', user); // Log user data to the console for debugging
  //     this.user = user;
      
  //   });
  // }
  
}
