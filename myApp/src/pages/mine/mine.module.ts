import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { MinePage } from './mine';

@NgModule({
    imports: [
        IonicPageModule
    ],
    declarations: [
        MinePage
    ],
    exports: [
        IonicPageModule
    ],
    entryComponents: [
        MinePage
    ],
    providers: [

    ],
})
export class MineModule {

}