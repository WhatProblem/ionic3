import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomeDetail } from '../homeDetail/homeDetail';

declare let Swiper: any;

@Component({
    selector: 'page-newFilm',
    templateUrl: 'newFilm.html'
})


export class NewFilm implements OnInit {
    private pages: number;
    private newData = [];

    sliderOptions = {
        slidesPerView: 4,
        centeredSlides: true
    };

    // 初始化变量
    private newFilmDatas: object = [];

    constructor(
        public nav: NavController,
        public params: NavParams
    ) { }

    @Input() set newFilmData(data) {
        if (data) {
            this.newFilmDatas = data;
            this.pages = Math.round(data['length'] / 3);
            for (let i = 0; i < this.pages; i++) {
                this.newData.push(data.slice(3 * i, 3 * (i + 1)));
            }
        }
    }

    ngOnInit() {

    }

    // jump to homeDetail
    jumpToDetail(obj: object) {
        this.nav.push(HomeDetail, { item: obj });
    }
}