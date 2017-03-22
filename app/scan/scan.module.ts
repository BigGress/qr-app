import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { BarcodeScanner } from 'nativescript-barcodescanner';
import { ScanComponent } from "./scan.component";

import { ScanRoutingModule } from "./scan.routing";

@NgModule({
    bootstrap: [
        ScanComponent
    ],
    imports: [
        ScanRoutingModule
    ],
    providers: [
        BarcodeScanner
    ],
    declarations: [
        ScanComponent,
    ]
})
export class ScanModule {}