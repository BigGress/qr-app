import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as camera from "nativescript-camera";
import { Image } from "ui/image";
import * as buttonModule from "ui/button";
import { BarcodeScanner } from 'nativescript-barcodescanner';

import { Item } from "./item";
import { ItemService } from "./item.service";

var testButton = new buttonModule.Button();

testButton.on(buttonModule.Button.tapEvent, function() {
    console.log(123)
}, this);

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    item: Item;
    test="123"
    src: any;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private barcodeScanner: BarcodeScanner
    ) {
        console.log(12);
        camera.requestPermissions();
    }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
    }
    
    takeImage() {
        console.log(123)
        camera.takePicture()
            .then((res) => {
                var image = new Image();
                // image.src = res;
                this.src = res;
            })
    }

    takeQc() {
        console.log(123)
        this.barcodeScanner.scan({
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
            console.log(JSON.stringify(result))
            }, (errorMessage) => {
                console.log("No scan. " + errorMessage);
            });
    }
}
