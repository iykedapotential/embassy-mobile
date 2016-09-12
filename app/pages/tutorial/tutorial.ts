import { Component } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';


interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  templateUrl: 'build/pages/tutorial/tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.slides = [
      {
        title: 'Royalty Mobile App',
        description: 'Quick Access to the WorldChangers Resources',
        image: 'img/pp.jpeg',
      },
      {
        title: 'WorldChangers e-Resources',
        description: 'Have access to the HouseKeepers audio messages, video messages and other resources.',
        image: 'img/pp.jpeg',
      },
      {
        title: 'Online Payments',
        description: 'Online Payment Platform for your tithes and offering',
        image: 'img/pp.jpeg',
      }
    ];
  }

  startApp() {
    this.navCtrl.push(LoginPage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
