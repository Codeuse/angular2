var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http } from "@angular/http";
import { Location } from "../core/location.class";
import { Injectable } from "@angular/core";
import * as L from "leaflet";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
var GeocodingService = (function () {
    function GeocodingService(http) {
        this.http = http;
    }
    GeocodingService.prototype.geocode = function (address) {
        return this.http
            .get("http://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent(address))
            .map(function (res) { return res.json(); })
            .map(function (result) {
            if (result.status !== "OK") {
                throw new Error("unable to geocode address");
            }
            var location = new Location();
            location.address = result.results[0].formatted_address;
            location.latitude = result.results[0].geometry.location.lat;
            location.longitude = result.results[0].geometry.location.lng;
            var viewPort = result.results[0].geometry.viewport;
            location.viewBounds = L.latLngBounds({
                lat: viewPort.southwest.lat,
                lng: viewPort.southwest.lng
            }, {
                lat: viewPort.northeast.lat,
                lng: viewPort.northeast.lng
            });
            return location;
        });
    };
    GeocodingService.prototype.getCurrentLocation = function () {
        var _this = this;
        return this.http
            .get("http://ipv4.myexternalip.com/json")
            .map(function (res) { return res.json().ip; })
            .flatMap(function (ip) { return _this.http.get("http://freegeoip.net/json/" + ip); })
            .map(function (res) { return res.json(); })
            .map(function (result) {
            var location = new Location();
            location.address = result.city + ", " + result.region_code + " " + result.zip_code + ", " + result.country_code;
            location.latitude = result.latitude;
            location.longitude = result.longitude;
            return location;
        });
    };
    GeocodingService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], GeocodingService);
    return GeocodingService;
}());
export { GeocodingService };
//# sourceMappingURL=geocoding.service.js.map