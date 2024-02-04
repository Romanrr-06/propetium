import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

interface Noticia {
  titulo: string;
  contenido: string;
  imagen: string;
  expanded: boolean;
  mostrarImagen: boolean;
  usuario: string;
  comentarios: [];
  mostrarComentarios: boolean;
}

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage {
  user: any;
  noticias: Noticia[] = [
    {
      titulo: "Propetium-Coin Revoluciona el Mundo de las Criptomonedas con Innovador Enfoque Ecológico",
      contenido: "En una sorprendente y emocionante revelación, Propetium-Coin ha anunciado su entrada al mercado de criptomonedas con un enfoque revolucionario en sostenibilidad ambiental. Esta nueva moneda digital busca cambiar la percepción tradicional de las criptomonedas al abordar activamente las preocupaciones sobre el consumo energético y el impacto ambiental asociados con la minería de criptomonedas.\n\nPropetium-Coin ha adoptado un innovador mecanismo de consenso denominado 'Proof-of-Green', que premia a los mineros que utilizan fuentes de energía renovable. Este enfoque ha generado un gran interés en la comunidad criptográfica, ya que aborda las críticas ambientales que a menudo se asocian con otras criptomonedas.\n\nAdemás de su compromiso con la sostenibilidad, Propetium-Coin también ha implementado tecnologías de seguridad de última generación para proteger las transacciones y garantizar la integridad de la red.\n\nSu equipo de desarrollo está formado por expertos en blockchain y tecnologías descentralizadas, lo que aumenta la confianza en la viabilidad a largo plazo de la moneda.\n\nLa moneda se lanzó con un evento virtual que atrajo la atención de inversores y entusiastas de todo el mundo. Durante el lanzamiento, los fundadores de Propetium-Coin destacaron su compromiso con la transparencia y la participación comunitaria, prometiendo utilizar parte de los beneficios para iniciativas ecológicas y sociales.\n\nA medida que Propetium-Coin comienza a ganar tracción en los mercados, se espera que su enfoque ecológico atraiga a inversores éticos y concienciados con el medio ambiente. Esta nueva incorporación al mundo de las criptomonedas demuestra que la innovación y la sostenibilidad pueden ir de la mano, ofreciendo un enfoque prometedor para el futuro de las finanzas digitales.",
      imagen: 'url-a-la-imagen-propetium.jpg',
      expanded: false,
      mostrarImagen: false,
      usuario: 'Nombre de Usuario',
      comentarios: [],
      mostrarComentarios: true
    },
    {
      titulo: "EtherVortex Anuncia Contrato Inteligente Revolucionario para Transacciones Instantáneas",
      contenido: "La criptomoneda EtherVortex ha revelado un contrato inteligente revolucionario que permite transacciones instantáneas. Esta innovación busca abordar los desafíos de escalabilidad enfrentados por muchas criptomonedas, ofreciendo una solución eficiente y rápida para los usuarios.",
      imagen: 'url-a-la-imagen-ethervortex.jpg',
      expanded: false,
      mostrarImagen: false,
      usuario: 'Nombre de Usuario',
      comentarios: [],
      mostrarComentarios: true
    },
    {
      titulo: "SolarCoin Impulsa la Adopción de Energía Solar con Recompensas para Productores de Energía Verde",
      contenido: "SolarCoin, una criptomoneda centrada en la sostenibilidad, ha implementado un programa de recompensas para los productores de energía solar. Los usuarios que generan energía verde ahora pueden recibir SolarCoins como incentivo, fomentando la adopción de fuentes de energía renovable.",
      imagen: 'url-a-la-imagen-solarcoin.jpg',
      expanded: false,
      mostrarImagen: false,
      usuario: 'Nombre de Usuario',
      comentarios: [],
      mostrarComentarios: true
    },
  ];
 currentIndex = 0;

 toggleImage(index: number) {
  this.noticias[index].mostrarImagen = !this.noticias[index].mostrarImagen;
}

toggleNewsContent(index: number) {
  this.noticias[index].expanded = !this.noticias[index].expanded;
}

showNextNews() {
  this.currentIndex = (this.currentIndex + 1) % this.noticias.length;
}



//  crear su noticia 



nuevaNoticia: Noticia = {
  titulo: '',
  contenido: '',
  imagen: '',
  expanded: false,
  mostrarImagen: false,
  usuario: 'Nombre de Usuario',
  comentarios: [],
  mostrarComentarios: true,
};
agregarNoticia() {
  if (this.nuevaNoticia.titulo && this.nuevaNoticia.contenido) {
    if (!this.nuevaNoticia.imagen || this.esURLValida(this.nuevaNoticia.imagen)) {
      this.noticias.push(this.nuevaNoticia);
      this.nuevaNoticia = {
        titulo: '',
        contenido: '',
        imagen: '',
        expanded: false,
        mostrarImagen: false,
        usuario: 'Nombre de Usuario',
        comentarios: [],
        mostrarComentarios: true,
      };
    } else {
      console.error('Por favor, ingresa una URL de imagen válida.');
    }
  } else {
    console.error('Por favor, completa todos los campos obligatorios.');
  }
}

esURLValida(url: string): boolean {
  const urlRegex = /(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlRegex.test(url);
}


  }
