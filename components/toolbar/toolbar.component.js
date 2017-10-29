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
import { MapService } from "../../services/map.service";
import * as L from "leaflet";
var ToolbarComponent = (function () {
    function ToolbarComponent(mapService) {
        this.mapService = mapService;
        this.postsDatas = [{
                "id": 1,
                "content": 'Bonjour la terre',
                "authorId": 1
            },
            {
                "id": 2,
                "content": 'Bonjour mars',
                "authorId": 1
            }];
        this.usersDatas = [{
                "id": 1,
                "name": 'john doe',
                "latitude": 40.731253,
                "longitude": -73.996139
            },
            {
                "id": 2,
                "name": 'mauritanien',
                "latitude": 41.56485,
                "longitude": -73.996139
            }];
        this.commentsDatas = [{
                "id": "",
                "body": " ",
                "postId": " ",
                "by": ""
            },
            {
                "id": 2,
                "body": "",
                "postId": 2,
                "by": 1
            }];
        this.albumDatas = [{
                "id": 1,
                "name": "mon premier album (2) photos",
            },
            {
                "id": 2,
                "name": "mon deuxieme album (2) photos",
            }];
        this.photosDatas = [{
                "id": "",
                "url": "",
                "albumId": "",
                "userId": ""
            },
            {
                "id": 1,
                "url": "mnnbnn",
                "albumId": 1,
                "userId": 1
            }];
        this.editing = false;
        this.removing = false;
        this.markerCount = 0;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        this.mapService.disableMouseEvent("add-marker");
        this.mapService.disableMouseEvent("remove-marker");
        this.mapService.disableMouseEvent("toggle-layer");
    };
    ToolbarComponent.prototype.Initialize = function () {
        var _this = this;
        this.mapService.map.on("click", function (e) {
            if (_this.editing) {
                var marker_1 = L.marker(e.latlng, {
                    icon: L.icon({
                        iconUrl: require("../../../node_modules/leaflet/dist/images/marker-icon.png"),
                        shadowUrl: require("../../../node_modules/leaflet/dist/images/marker-shadow.png")
                    }),
                    draggable: true
                })
                    .bindPopup("Marker #" + (_this.markerCount + 1).toString(), {
                    offset: L.point(12, 6)
                })
                    .addTo(_this.mapService.map)
                    .openPopup();
                _this.markerCount += 1;
                marker_1.on("click", function (event) {
                    if (_this.removing) {
                        _this.mapService.map.removeLayer(marker_1);
                        _this.markerCount -= 1;
                    }
                });
            }
        });
    };
    ToolbarComponent.prototype.toggleEditing = function () {
        this.editing = !this.editing;
        if (this.editing && this.removing) {
            this.removing = false;
        }
    };
    ToolbarComponent.prototype.toggleRemoving = function () {
        this.removing = !this.removing;
        if (this.editing && this.removing) {
            this.editing = false;
        }
    };
    ToolbarComponent.prototype.toggleAirPortLayer = function () {
        this.airportLayerAdded = !this.airportLayerAdded;
        this.mapService.toggleAirPortLayer();
    };
    ToolbarComponent.prototype.postAction = function (da) {
        switch (da) {
            case 1:
                this.commentsDatas = [{
                        "id": 1,
                        "body": " commentaire du premier ",
                        "postId": 1,
                        "by": 1
                    },
                    {
                        "id": 2,
                        "body": "Autre a dire",
                        "postId": 1,
                        "by": 1
                    }];
                break;
            case 2:
                this.commentsDatas = [{
                        "id": 1,
                        "body": " commentaire du deuxieme ",
                        "postId": 2,
                        "by": 1
                    },
                    {
                        "id": 2,
                        "body": "second commentaire ",
                        "postId": 2,
                        "by": 1
                    }];
        }
    };
    ToolbarComponent.prototype.albumAction = function (da) {
        switch (da) {
            case 1:
                this.photosDatas = [{
                        "id": 1,
                        "url": "images/imgtest.png",
                        "albumId": 1,
                        "userId": 1
                    },
                    {
                        "id": 2,
                        "url": "images/imgtest.png",
                        "albumId": 1,
                        "userId": 2
                    }];
                break;
            case 2:
                this.photosDatas = [{
                        "id": 1,
                        "url": "images/imgtest.png",
                        "albumId": 2,
                        "userId": 1
                    },
                    {
                        "id": 2,
                        "url": "images/imgtest.png",
                        "albumId": 2,
                        "userId": 2
                    }];
        }
    };
    ToolbarComponent.prototype.gotoAction = function (da) {
        console.log(da);
        var marker = L.marker(L.latLng(da.latitude, da.longitude), {
            icon: L.icon({
                iconUrl: require("../../../node_modules/leaflet/dist/images/marker-icon.png"),
                shadowUrl: require("../../../node_modules/leaflet/dist/images/marker-shadow.png")
            }),
        })
            .bindPopup(da.name, {
            offset: L.point(12, 6)
        })
            .addTo(this.mapService.map)
            .openPopup();
    };
    ToolbarComponent = __decorate([
        Component({
            selector: "toolbar",
            templateUrl: "./toolbar.component.html",
            styleUrls: [
                "./toolbar.component.less",
                "../../styles/main.less"
            ],
            providers: []
        }),
        __metadata("design:paramtypes", [MapService])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
export { ToolbarComponent };
//# sourceMappingURL=toolbar.component.js.map