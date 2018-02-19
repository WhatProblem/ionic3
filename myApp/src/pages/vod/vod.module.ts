import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { VodPage } from './vod';
import { SearchModule } from '../search/search.module';

@NgModule({
    declarations: [
        VodPage
    ],
    imports: [
        IonicPageModule,
        SearchModule
    ],
    exports: [
        IonicPageModule
    ],
    entryComponents: [
        VodPage
    ],
    providers: [],
})
export class VodModule {

}