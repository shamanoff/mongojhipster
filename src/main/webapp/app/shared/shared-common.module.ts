import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {
    MongojhipsterSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        MongojhipsterSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        MongojhipsterSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class MongojhipsterSharedCommonModule {}
