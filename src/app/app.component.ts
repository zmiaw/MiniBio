import { Component, Renderer2 } from '@angular/core';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MiniBioNoelia';
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faGithub = faGithub

  isDarkMode = false;
  faMoon = faMoon;
  faSun = faSun;

  user = {
    image: "../assets/imagenes/foto-noelia.jpeg",
    username: "Noelia García",
    description: "Developer Loading… \n █▒▒▒▒▒▒▒▒▒",
    links: [
      {
        link: "https://github.com/zmiaw",
        title: "Mis proyectos de github",
        icon: faGithub
      },

      {
        link: "https://www.twitter.com",
        title: "Mi twitter",
        icon: faTwitter
      },

      {
        link: "https://github.com/zmiaw",
        title: "Instagram",
        icon: faInstagram
      },

      {
        link: "https://www.linkedin.com/in/noelia-garc%C3%ADa-fern%C3%A1ndez-504a50173",
        title: "Mi Linkedin",
        icon: faLinkedin
      }

    ]
  }

  constructor(private renderer: Renderer2) {}

  changeMode() {

    this.isDarkMode = !this.isDarkMode

    if(this.isDarkMode){
      this.renderer.addClass(document.body, "dark");
    } else {
      this.renderer.removeClass(document.body, "dark");


    }
  }
}
