import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';
// import { Toast } from 'ionic-native';

declare var window: any;

@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData, public platform: Platform) { }

  onLogin(form) {
    this.submitted = true;

    if (form.valid) {
      if (!this.userData.login(this.login.username)) {
        this.showToast('Unable to login', 'bottom');
      } else {
        this.navCtrl.push(TabsPage);
      }
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }

  // showToast(message, position) {
  //  Toast.show(message, 'short', position).subscribe(
  //    toast => {
  //      console.log(toast);
  //    }
  //  );
  // }

  showToast(message, position) {
    this.platform.ready().then(() => {
      window.plugins.toast.show(message, 'short', position);
    });
  }
}
