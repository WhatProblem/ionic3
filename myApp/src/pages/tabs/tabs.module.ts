import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TabsPage } from './tabs';

@NgModule({
    imports: [
        IonicPageModule
    ],
    declarations: [
        TabsPage
    ],
    entryComponents: [
        TabsPage
    ],
    exports: [
        IonicPageModule
    ],
    providers: [],
})
export class TabsModule {

}
