import { Component, OnInit, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RecmMore } from './recmMore/recmMore';
import { HomeDetail } from '../../homeDetail/homeDetail';

@Component({
    selector: 'page-recommend',
    templateUrl: 'recommend.html'
})

export class Recommend implements OnInit {
    private recmList: any;
    constructor(
        public nav: NavController,
        public params: NavParams
    ) { }

    @Input() set recmData(data) {
        if (data) {
            this.recmList = data.slice(0,2);
        }
    }

    ngOnInit() {

    }

    jumpToDetail(obj) {
        this.nav.push(HomeDetail, { item: obj });
    }

    // 跳转到推荐影片列表
    goMore(){
        this.nav.push(RecmMore);
    }
}
