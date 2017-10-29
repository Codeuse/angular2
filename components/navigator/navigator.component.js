var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { GeocodingService } from "../../services/geocoding.service";
import { MapService } from "../../services/map.service";
var NavigatorComponent = (function () {
    function NavigatorComponent(geocoder, mapService) {
        this.geocoder = geocoder;
        this.mapService = mapService;
        this.results = [];
        this.usersresults = [];
        this.address = "";
    }
    NavigatorComponent.prototype.ngOnInit = function () {
        this.mapService.disableMouseEvent("goto");
        this.mapService.disableMouseEvent("place-input");
        this.map = this.mapService.map;
    };
    NavigatorComponent.prototype.goto = function () {
        var _this = this;
        if (!this.address) {
            return;
        }
        this.geocoder.geocode(this.address)
            .subscribe(function (location) {
            _this.map.fitBounds(location.viewBounds, {});
            _this.address = location.address;
        }, function (error) { return console.error(error); });
    };
    NavigatorComponent = __decorate([
        Component({
            selector: "navigator",
            templateUrl: "./navigator.component.html",
            styleUrls: [
                "./navigator.component.less",
                "../../styles/main.less"
            ],
            providers: []
        }),
        __metadata("design:paramtypes", [GeocodingService, MapService])
    ], NavigatorComponent);
    return NavigatorComponent;
}());
export { NavigatorComponent };
//# sourceMappingURL=navigator.component.js.map