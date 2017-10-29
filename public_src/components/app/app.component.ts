import {Component, ViewChild} from "@angular/core";
import {NavigatorComponent} from "../navigator/navigator.component";
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {MapService} from "../../services/map.service";

import {GeocodingService} from "../../services/geocoding.service";
import {Location} from "../../core/location.class";
import * as L from "leaflet";

import {Injectable} from "@angular/core";
import { Http, Headers, RequestOptions } from '@angular/http';
var url = "http://jsonplaceholder.typicode.com"

@Component({
    selector: "app",
    templateUrl: "./app.component.html",
    styleUrls: [
        "./app.component.less"
    ],
    providers: []
})
export class AppComponent {

    @ViewChild(ToolbarComponent) toolbarComponent: ToolbarComponent;

    constructor(private http: Http,private mapService: MapService, private geocoder: GeocodingService) {
    }
   
    ngOnInit() {
       
        let map = L.map("map", {
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
            .subscribe(
                location => map.panTo([location.latitude, location.longitude]),
                err => console.error(err)
            );
       
        this.toolbarComponent.Initialize();
  /*     
    let mek = L.marker(L.latLng(41.731253, -73.996139), {
        icon: L.icon({
            iconUrl: require<any>("../../../node_modules/leaflet/dist/images/marker-icon.png"),
            shadowUrl: require<any>("../../../node_modules/leaflet/dist/images/marker-shadow.png")
        }),
      
    })
    .bindPopup("Marker test", {
        offset: L.point(12, 6)
    })
    .addTo(this.mapService.map)
    .openPopup();

        let marker = L.marker(L.latLng(40.731253, -73.996139), {
            icon: L.icon({
                iconUrl: require<any>("../../../node_modules/leaflet/dist/images/marker-icon.png"),
                shadowUrl: require<any>("../../../node_modules/leaflet/dist/images/marker-shadow.png")
            }),
          
        })
        .bindPopup("Marker test", {
            offset: L.point(12, 6)
        })
        .addTo(this.mapService.map)
        .openPopup(); */
       
    }
   
    
}
