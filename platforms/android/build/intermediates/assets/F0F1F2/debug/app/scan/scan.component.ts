import { Component } from '@angular/core';
import { BarcodeScanner } from 'nativescript-barcodescanner';
import { Page } from "ui/page";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: "./scan.component.html",
    styleUrls: ["./scan.component.scss"]
})
export class ScanComponent {

    test: string = "test";

    scanBtnIcon = "扫一扫";

    qcText: string = "test";

    constructor(
        private barcodescanner: BarcodeScanner,
        private page: Page
    ) {
        // console.dump(page)
    }

    takeQc() {
        console.log(12);
        this.barcodescanner.scan({
            formats: "QR_CODE, EAN_13",
            cancelLabel: "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
            message: "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
            showFlipCameraButton: true,   // default false
            preferFrontCamera: false,     // default false
            showTorchButton: true,        // default false
            beepOnScan: true,             // Play or Suppress beep on scan (default true)
            torchOn: false,               // launch with the flashlight on (default false)
            resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
            // orientation: orientation,     // Android only, default undefined (sensor-driven orientation), other options: portrait|landscape
            openSettingsIfPermissionWasPreviouslyDenied: true // On iOS you can send the user to the settings app if access was previously denied
        }).then((result) => {
            // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
            // alert({
            //     title: "Scan result",
            //     message: "Format: " + result.format + ",\nValue: " + result.text,
            //     okButtonText: "OK"
            // });
            this.qcText = result.text;
        }, (errorMessage) => {
            console.log("No scan. " + errorMessage);
        });
    }
}
