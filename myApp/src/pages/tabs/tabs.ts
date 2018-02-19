import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage, Tabs } from 'ionic-angular';

import { LivetvPage } from '../livetv/livetv';
import { VodPage } from '../vod/vod';
import { HomePage } from '../home/home';
import { MinePage } from '../mine/mine';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabs: Tabs;

  tab1Root = HomePage;
  tab2Root = LivetvPage;
  tab3Root = VodPage;
  tab4Root = MinePage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  ionViewDidLoad() {

  }
}
