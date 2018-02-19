import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomeInterface } from '../../../sdk/homeInterface';

@Component({
    selector: 'page-homeDetail',
    templateUrl: 'homeDetail.html'
})

export class HomeDetail implements OnInit {
    private detailData: object;
    private recmData: object;
    private historyData: object;
    constructor(
        public params: NavParams,
        public navCtrl: NavController,
        public getData: HomeInterface
    ) {
        // this.detailData = params.data.item;
        // console.log(this.detailData);
    }

    ngOnInit() {
        // 隐藏某个子页面的tabs；
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map((key) => {
                elements[key].style.display = 'none';
            });
        }

        // 获取演员部分数据
        let detail = this.params.data.item;
        this.dealRole(detail);
        // 获取recm列表部分
        this.dealRecm();
        // 获取historyList部分
        this.dealHistory();
    }

    // 比较影片名称添加演员
    dealRole(obj?: object) {
        let self = this;
        this.getData.getRolesList().then((res: any) => {
            if (res) {
                res.forEach((item, index) => {
                    if (item['filmTitle'] == obj['filmTitle']) {
                        obj['playerList'] = null;
                        obj['playerList'] = item;
                        self.detailData = obj;
                        return self.detailData;
                    }
                });
            }
        })
    }

    // 推荐影片列表
    dealRecm() {
        let self = this;
        this.getData.getRecmList().then((res: any) => {
            if (res) {
                self.recmData = res;
                return self.recmData;
            }
        })
    }

    // 播放历史记录部分
    dealHistory() {
        let self = this;
        this.getData.getHistoty().then((res: any) => {
            if (res) {
                self.historyData = res;
                return self.historyData;
            }
        });
    }

    //当退出页面的时候
    ionViewWillLeave() {
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map((key) => {
                elements[key].style.display = 'flex';
            });
        }
    }

    goBack() {
        this.navCtrl.pop();
    }

}