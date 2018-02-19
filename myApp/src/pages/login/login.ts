import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class Login implements OnInit {
    private ctrlTips = true;

    constructor(
        public nav: NavController,
        public params: NavParams
    ) { }

    ngOnInit() {

    }
    // 获取输入用户名及密码
    doLogin(user, pwd) {
        this.ctrlTips = user == '' ? false : true;
        this.ctrlTips = pwd == '' ? false : true;
        if (user !== '' && pwd !== '') {
            this.nav.push(TabsPage);
        }
    }
}