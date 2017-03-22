"use strict";
var core_1 = require("@angular/core");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var scan_component_1 = require("./scan.component");
var scan_routing_1 = require("./scan.routing");
var ScanModule = (function () {
    function ScanModule() {
    }
    return ScanModule;
}());
ScanModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            scan_component_1.ScanComponent
        ],
        imports: [
            scan_routing_1.ScanRoutingModule
        ],
        providers: [
            nativescript_barcodescanner_1.BarcodeScanner
        ],
        declarations: [
            scan_component_1.ScanComponent,
        ]
    })
], ScanModule);
exports.ScanModule = ScanModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY2FuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBR3pDLDJFQUE2RDtBQUM3RCxtREFBaUQ7QUFFakQsK0NBQW1EO0FBZ0JuRCxJQUFhLFVBQVU7SUFBdkI7SUFBeUIsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFVBQVU7SUFkdEIsZUFBUSxDQUFDO1FBQ04sU0FBUyxFQUFFO1lBQ1AsOEJBQWE7U0FDaEI7UUFDRCxPQUFPLEVBQUU7WUFDTCxnQ0FBaUI7U0FDcEI7UUFDRCxTQUFTLEVBQUU7WUFDUCw0Q0FBYztTQUNqQjtRQUNELFlBQVksRUFBRTtZQUNWLDhCQUFhO1NBQ2hCO0tBQ0osQ0FBQztHQUNXLFVBQVUsQ0FBRztBQUFiLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXInO1xuaW1wb3J0IHsgU2NhbkNvbXBvbmVudCB9IGZyb20gXCIuL3NjYW4uY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFNjYW5Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vc2Nhbi5yb3V0aW5nXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIFNjYW5Db21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgU2NhblJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBCYXJjb2RlU2Nhbm5lclxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNjYW5Db21wb25lbnQsXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTY2FuTW9kdWxlIHt9Il19