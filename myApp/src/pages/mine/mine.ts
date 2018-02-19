import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
    selector: 'page-mine',
    templateUrl: 'mine.html'
})

export class MinePage {

    constructor(public navCtrl: NavController) {

    }
    jumpToDetail() {
        alert('提示页面跳转');
        console.log('跳转页面');
    }
}