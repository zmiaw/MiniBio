import { Component, Renderer2 } from '@angular/core';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  faSun = faSun;
  faMoon = faMoon;

  darkMode = false;

  user = {
    image: "../assets/imagenes/chucky.jpg",
    imageDarkMode: "../assets/imagenes/chucky-noche.jpg",
    username: "Chucky Developer",
    description: "Asesino por diversión... 🔪 ...que siempre arma revolución",
    links: [
      {
        link: "https://github.com/",
        title: "Mis proyectos de github",
        icon: faGithub
      },
      {
        link: "https://twitter.com/",
        title: "Mi twitter",
        icon: faTwitter
      },
      {
        link: "https://www.instagram.com/",
        title: "Mi instagram",
        icon: faInstagram
      },
      {
        link: "",
        title: "Mi Linkedin",
        icon: faLinkedin
      }
    ]
  }

  constructor(private renderer: Renderer2) {

  }

  changeMode() {
    this.darkMode = !this.darkMode

    if (this.darkMode) {
      this.renderer.addClass(document.body, "dark");
    } else {
      this.renderer.removeClass(document.body, "dark");
    }

  }
}