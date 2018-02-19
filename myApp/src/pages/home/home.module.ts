import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';
import { Banner } from './banner/banner';
import { BanService } from './banner/banService';
import { NewFilm } from './newFilm/newFilm';
import { Recm } from './recm/recm';
import { Pop } from './pop/pop';
import { SearchModule } from '../search/search.module';

import { HomeDetail } from './homeDetail/homeDetail';
import { FilmDetail } from './homeDetail/filmDetail/filmDetail';
import { Recommend } from './homeDetail/recommend/recommend';
import { RecmMore } from './homeDetail/recommend/recmMore/recmMore';
import { HistoryList } from './homeDetail/history/history';
import { HistoryMore } from './homeDetail/history/historyMore/historyMore';

@NgModule({
    imports: [
        IonicPageModule,
        SearchModule
    ],
    declarations: [
        HomePage,
        Banner,
        NewFilm,
        Recm,
        Pop,
        HomeDetail,
        FilmDetail,
        Recommend,
        RecmMore,
        HistoryList,
        HistoryMore
    ],
    exports: [
        IonicPageModule
    ],
    entryComponents: [
        HomePage,
        Banner,
        NewFilm,
        Recm,
        Pop,
        HomeDetail,
        FilmDetail,
        Recommend,
        RecmMore,
        HistoryList,
        HistoryMore
    ],
    providers: [
        BanService
    ],
})
export class HomeModule {

}