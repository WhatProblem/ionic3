import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomeDetail } from '../homeDetail/homeDetail';

@Component({
    selector: 'page-pop',
    templateUrl: 'pop.html'
})

export class Pop implements OnInit {
    // 初始化数据变量
    private dataLen: number;
    private slideDatas = [];
    private popDatas: object = [];

    constructor(
        public nav: NavController,
        public params: NavParams
    ) { }

    @Input() set popData(data) {
        if (data) {
            this.popDatas = data;
            this.dataLen = Math.round(data.length / 3);
            for (let i = 0; i < this.dataLen; i++) {
                this.slideDatas.push(data.slice(i * 3, (i + 1) * 3));
            }
        }
    }

    // jump to homeDetail
    jumpToDetail(obj) {
        this.nav.push(HomeDetail, { item: obj });
    }

    ngOnInit() {

    }
}