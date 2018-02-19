import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { LivetvPage } from './livetv';
import { SearchModule } from '../search/search.module';

@NgModule({
    imports: [
        IonicPageModule,
        SearchModule
    ],
    declarations: [
        LivetvPage
    ],
    exports: [
        IonicPageModule
    ],
    entryComponents: [
        LivetvPage
    ],
    providers: [],
})
export class LivetvModule {

}