import { Component, Input, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { HomeInterface } from '../../../../../sdk/homeInterface';
import { HomeDetail } from '../../../homeDetail/homeDetail';


@Component({
    selector: 'page-recmMore',
    templateUrl: 'recmMore.html'
})

export class RecmMore implements OnInit {
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
        // 未生效
        // this.enterHideTabs();
        let self = this;
        this.getData.getRecmList().then(res => {
            if (res) {
                self.allDatas = res;
                self.onceScroll = res['slice'](0, 3);
            }
        })
    }

    // 加载更多
    doInfinite(infiniteScroll) {
        this.ctrlNum += 3;
        let len = this.ctrlNum;
        if (this.ctrlNum === 12) {
            infiniteScroll.enable(false);   //没有数据的时候隐藏 ion-infinate-scroll
            this.showTips = true;
            return;
        }
        setTimeout(() => {
            this.onceScroll = this.allDatas['slice'](0, len + 3);
            infiniteScroll.complete();
        }, 500);
    }

    jumpToDetail(obj) {
        this.nav.push(HomeDetail, { item: obj });
    }

    //当退出页面的时候
    ionViewWillLeave() {
        // 未生效
        // this.leaveHideTabs();
    }

    enterHideTabs() {
        // 隐藏某个子页面的tabs；
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map((key) => {
                elements[key].style.display = 'none';
            });
        }
    }

    leaveHideTabs() {
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map((key) => {
                elements[key].style.display = 'flex';
            });
        }
    }

    goBack() {
        this.nav.pop();
    }



    // items = [];

    // constructor() {
    //     for (let i = 0; i < 30; i++) {
    //         this.items.push(this.items.length);
    //     }
    // }

    // doInfinite(infiniteScroll) {
    //     console.log('Begin async operation');

    //     setTimeout(() => {
    //         for (let i = 0; i < 30; i++) {
    //             this.items.push(this.items.length);
    //         }

    //         console.log('Async operation has ended');
    //         infiniteScroll.complete();
    //     }, 500);
    // }
}