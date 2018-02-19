import { Component, OnInit, Input } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { HistoryMore } from './historyMore/historyMore';
import { HomeDetail } from '../../homeDetail/homeDetail';

@Component({
    selector: 'page-historyList',
    templateUrl: 'history.html'
})

export class HistoryList implements OnInit {
    private allDatas = [];
    constructor(
        public nav: NavController,
        public params: NavParams
    ) { }

    @Input() set historyData(data){
        if (data) {
            this.allDatas = data.slice(0,4);
        }
    }

    ngOnInit() {

    }
    // 跳转到推荐影片列表
    goMore(){
        this.nav.push(HistoryMore);
    }

    jumpToDetail(obj) {
        this.nav.push(HomeDetail, { item: obj });
    }
}