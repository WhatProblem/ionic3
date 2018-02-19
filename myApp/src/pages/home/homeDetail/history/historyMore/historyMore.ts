import { Component, OnInit, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomeInterface } from '../../../../../sdk/homeInterface';
import { HomeDetail } from '../../../homeDetail/homeDetail';

@Component({
    selector: 'page-historyMore',
    templateUrl: 'historyMore.html'
})

export class HistoryMore implements OnInit {
    // 初始化获取所有数据
    private allDatas: object = [];
    // 单次滚动分批加载数据
    private onceScroll: object = [];
    // 控制加载数量
    private ctrlNum = 0;
    // tips显示隐藏控制
    private showTips = false;
    constructor(
        public nav: NavController,
        public params: NavParams,
        public getData: HomeInterface
    ) { }

    ngOnInit() {
        let self = this;
        this.getData.getHistoty().then(res => {
            if (res) {
                self.allDatas = res;
                self.onceScroll = res['slice'](0, 3);
            }
        });
    }

    // 加载更多
    doInfinite(infiniteScroll) {
        this.ctrlNum += 3;
        let len = this.ctrlNum;
        if (this.ctrlNum === 12) {
            infiniteScroll.enable(false);// 没有数据时，隐藏加载圈
            this.showTips = true;
            return;
        }
        setTimeout(() => {
            this.onceScroll = this.allDatas['slice'](0, len + 3);
            infiniteScroll.complete();
        }, 500);
    }

    jumpToDetail(obj) {
        this.nav.push(HomeDetail, { item: obj })
    }

    goBack() {
        this.nav.pop();
    }
}