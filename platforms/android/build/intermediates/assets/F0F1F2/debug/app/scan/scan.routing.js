"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var scan_component_1 = require("./scan.component");
var routes = [
    { path: "scan", component: scan_component_1.ScanComponent }
];
var ScanRoutingModule = (function () {
    function ScanRoutingModule() {
    }
    return ScanRoutingModule;
}());
ScanRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forChild(routes)
        ],
        exports: [router_1.NativeScriptRouterModule]
    })
], ScanRoutingModule);
exports.ScanRoutingModule = ScanRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbi5yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Nhbi5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLG1EQUFpRDtBQUVqRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUM7Q0FDM0MsQ0FBQTtBQVFELElBQWEsaUJBQWlCO0lBQTlCO0lBQWdDLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUFBakMsSUFBaUM7QUFBcEIsaUJBQWlCO0lBTjdCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7U0FDNUM7UUFDRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUN0QyxDQUFDO0dBQ1csaUJBQWlCLENBQUc7QUFBcEIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBTY2FuQ29tcG9uZW50IH0gZnJvbSBcIi4vc2Nhbi5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge3BhdGg6IFwic2NhblwiLCBjb21wb25lbnQ6IFNjYW5Db21wb25lbnR9XG5dXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKVxuICAgIF0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgU2NhblJvdXRpbmdNb2R1bGUge30iXX0=