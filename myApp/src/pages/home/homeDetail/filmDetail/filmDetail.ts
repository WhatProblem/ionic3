import { Component, OnInit, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
    selector: 'page-filmDetail',
    templateUrl: 'filmDetail.html'
})

export class FilmDetail implements OnInit {
    private allDatas;
    private roleList;
    constructor() { }

    @Input() set detailData(data) {
        if (data) {
            this.allDatas = data;
            this.roleList = data['playerList']['players'].slice(0, 4);
        }
    }

    ngOnInit() {

    }
}