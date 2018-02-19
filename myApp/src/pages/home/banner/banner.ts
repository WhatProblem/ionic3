import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

// import { BanService } from './banService';
import { HomeDetail } from '../homeDetail/homeDetail';

@Component({
    selector: 'page-banner',
    templateUrl: 'banner.html'
})

export class Banner implements OnInit {
    // 初始化变量
    private banDatas: any;
    // 解决加载报错问题
    private len: any;

    @ViewChild(Slides) slides: Slides;

    constructor(
        public nav: NavController,
        public params: NavParams
    ) { }

    @Input() set banData(data) {
        if (data) {
            this.banDatas = data;
            this.len = data['length'];
        }
    }

    ngOnInit() {

    }

    slideMove() {
        console.log('轮播时监听');
    }

    jumpToDetail(obj, i) {
        this.nav.push(HomeDetail, { item: obj });
    }

}