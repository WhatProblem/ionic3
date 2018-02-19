import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { VodModule } from '../pages/vod/vod.module';
import { HomeModule } from '../pages/home/home.module';
import { LivetvModule } from '../pages/livetv/livetv.module';
import { MineModule } from '../pages/mine/mine.module';
import { LanguagePage } from '../pages/language/language';


// common interface
import { HomeInterface } from '../sdk/homeInterface';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsModule } from '../pages/tabs/tabs.module';
import { Login } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    LanguagePage,
    Login
  ],
  imports: [
    BrowserModule,
    // IonicModule.forRoot(MyApp),
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true' // 隐藏全部子页面tabs
    }),
    TabsModule,
    HomeModule,
    LivetvModule,
    VodModule,
    MineModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LanguagePage,
    Login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HomeInterface
  ]
})
export class AppModule { }
