var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import * as L from "leaflet";
var url = "http://jsonplaceholder.typicode.com";
var MapService = (function () {
    function MapService(http) {
        this.http = http;
        this.baseMaps = {
            OpenStreetMap: L.tileLayer("http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
            }),
            Esri: L.tileLayer("http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
                attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
            }),
            CartoDB: L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
            })
        };
    }
    MapService.prototype.disableMouseEvent = function (elementId) {
        var element = document.getElementById(elementId);
        L.DomEvent.disableClickPropagation(element);
        L.DomEvent.disableScrollPropagation(element);
    };
    MapService.prototype.toggleAirPortLayer = function () {
        var _this = this;
        if (this.vtLayer) {
            this.map.removeLayer(this.vtLayer);
            delete this.vtLayer;
        }
        else {
            this.http.get("https://rawgit.com/haoliangyu/angular2-leaflet-starter/master/public/data/airports.geojson")
                .map(function (res) { return res.json(); })
                .subscribe(function (result) {
                _this.vtLayer = L.vectorGrid.slicer(result);
                _this.vtLayer.addTo(_this.map);
            });
        }
    };
    MapService.prototype.getUsers = function () {
        return this.http.get(url + '/users');
    };
    MapService.prototype.getPosts = function () {
    };
    MapService.prototype.getAlbum = function () {
        return this.http.get(url + '/albums');
    };
    MapService.prototype.getPhotos = function () {
        return this.http.get(url + '/photos');
    };
    MapService.prototype.getComments = function () {
        return this.http.get(url + '/comments');
    };
    MapService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], MapService);
    return MapService;
}());
export { MapService };
//# sourceMappingURL=map.service.js.map