import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomeInterface } from '../../sdk/homeInterface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  // 初始化变量，接收数据
  private allData: object;
  private banData: object;
  private newFilmData: object;
  private recmData: object;
  private popData: object;

  constructor(
    public navCtrl: NavController,
    public getData: HomeInterface
  ) { }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    let self = this;
    this.getData.getHomeData().then((res) => {
      self.allData = res;
      self.banData = res['banner'];
      self.newFilmData = res['newFilm'];
      self.recmData = res['recmVod'];
      self.popData = res['recmPop'];
    });
  }

  // 刷新页面
  doRefresh(refresher) {
    let self = this;
    setTimeout(() => {
      self.getAllData();
      refresher.complete();
    }, 2000);
  }
}
