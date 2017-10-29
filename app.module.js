var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import "leaflet";
import "leaflet.vectorgrid";
import "zone.js/dist/zone";
import "zone.js/dist/long-stack-trace-zone";
import "reflect-metadata";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "leaflet/dist/leaflet.css";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./components/app/app.component";
import { NavigatorComponent } from "./components/navigator/navigator.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { MapService } from "./services/map.service";
import { GeocodingService } from "./services/geocoding.service";
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [HttpModule, FormsModule, BrowserModule],
            bootstrap: [AppComponent],
            declarations: [
                AppComponent,
                NavigatorComponent,
                ToolbarComponent
            ],
            providers: [
                MapService,
                GeocodingService
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map