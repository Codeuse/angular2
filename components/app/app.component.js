var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from "@angular/core";
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { MapService } from "../../services/map.service";
import { GeocodingService } from "../../services/geocoding.service";
import * as L from "leaflet";
import { Http } from '@angular/http';
var url = "http://jsonplaceholder.typicode.com";
var AppComponent = (function () {
    function AppComponent(http, mapService, geocoder) {
        this.http = http;
        this.mapService = mapService;
        this.geocoder = geocoder;
    }
    AppComponent.prototype.ngOnInit = function () {
        var map = L.map("map", {
            zoomControl: false,
            center: L.latLng(40.731253, -73.996139),
            zoom: 12,
            minZoom: 4,
            layers: [this.mapService.baseMaps.OpenStreetMap]
        });
        L.control.zoom({ position: "topright" }).addTo(map);
        L.control.layers(this.mapService.baseMaps).addTo(map);
        L.control.scale().addTo(map);
        this.mapService.map = map;
        this.geocoder.getCurrentLocation()
            .subscribe(function (location) { return map.panTo([location.latitude, location.longitude]); }, function (err) { return console.error(err); });
        this.toolbarComponent.Initialize();
    };
    __decorate([
        ViewChild(ToolbarComponent),
        __metadata("design:type", ToolbarComponent)
    ], AppComponent.prototype, "toolbarComponent", void 0);
    AppComponent = __decorate([
        Component({
            selector: "app",
            templateUrl: "./app.component.html",
            styleUrls: [
                "./app.component.less"
            ],
            providers: []
        }),
        __metadata("design:paramtypes", [Http, MapService, GeocodingService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map