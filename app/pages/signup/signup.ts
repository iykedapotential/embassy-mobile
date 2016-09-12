import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { UserData } from '../../providers/user-data';


@Component({
  templateUrl: 'build/pages/signup/signup.html'
})
export class SignupPage {
  signup: {phonenumber?: string, email?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData) {}

  onSignup(form) {
    this.submitted = true;

    if (form.valid) {
      if (this.userData.signup(this.signup.email)) {
        this.navCtrl.push(TabsPage);
      } else {
        this.navCtrl.push(TabsPage);
      }
    }
  }

  onSignIn() {
    this.navCtrl.push(LoginPage);
  }
}
