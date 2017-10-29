import {Component} from "@angular/core";
import {MapService} from "../../services/map.service";
import * as L from "leaflet";

@Component({
    selector: "toolbar",
    templateUrl: "./toolbar.component.html",
    styleUrls: [
        "./toolbar.component.less",
        "../../styles/main.less"
    ],
    providers: []
})
export class ToolbarComponent {
    editing: boolean;
    removing: boolean;
    airportLayerAdded: boolean;
    markerCount: number;


    constructor(private mapService: MapService) {
        this.editing = false;
        this.removing = false;
        this.markerCount = 0;
    }
    postsDatas: any[] = [ {
        "id": 1,
        "content": 'Bonjour la terre',
        "authorId":1
     },  
     {
        "id": 2,
        "content": 'Bonjour mars',
        "authorId":1
     } ];

     usersDatas: any[] = [ {
        "id": 1,
        "name": 'john doe',
        "latitude":40.731253,
        "longitude":-73.996139
     },  
     {
        "id": 2,
        "name": 'mauritanien',
        "latitude":41.56485,
        "longitude":-73.996139
     } ];
     commentsDatas=[{
        "id": "",
        "body":" ",
        "postId":" ",
        "by":""
    },
    {
       "id": 2,
       "body":"",
       "postId":2,
       "by":1
   }]  
   albumDatas=[{
    "id": 1,
    "name":"mon premier album (2) photos",
},
{
   "id": 2,
   "name":"mon deuxieme album (2) photos",
}]  
   photosDatas=[{//contenu test
    "id": "",
    "url":"",
    "albumId":"",
    "userId":""
},
{
   "id": 1,
   "url":"mnnbnn",
   "albumId":1,
   "userId":1
}]  
 
   
    

    ngOnInit() {
        this.mapService.disableMouseEvent("add-marker");
        this.mapService.disableMouseEvent("remove-marker");
        this.mapService.disableMouseEvent("toggle-layer");
    }

    Initialize() {
        this.mapService.map.on("click", (e: L.LeafletMouseEvent) => {
            if (this.editing) {
                let marker = L.marker(e.latlng, {
                    icon: L.icon({
                        iconUrl: require<any>("../../../node_modules/leaflet/dist/images/marker-icon.png"),
                        shadowUrl: require<any>("../../../node_modules/leaflet/dist/images/marker-shadow.png")
                    }),
                    draggable: true
                })
                .bindPopup("Marker #" + (this.markerCount + 1).toString(), {
                    offset: L.point(12, 6)
                })
                .addTo(this.mapService.map)
                .openPopup();

                this.markerCount += 1;

                marker.on("click", (event: MouseEvent) => {
                    if (this.removing) {
                        this.mapService.map.removeLayer(marker);
                        this.markerCount -= 1;
                    }
                });
            }
        });
    }

    toggleEditing() {
        this.editing = !this.editing;

        if (this.editing && this.removing) {
            this.removing = false;
        }
    }

    toggleRemoving() {
        this.removing = !this.removing;

        if (this.editing && this.removing) {
            this.editing = false;
        }
    }

    toggleAirPortLayer() {
        this.airportLayerAdded = !this.airportLayerAdded;
        this.mapService.toggleAirPortLayer();
    }
    postAction(da){
        switch (da){
            case 1:
            this.commentsDatas=[{
                "id": 1,
                "body":" commentaire du premier ",
                "postId":1,
                "by":1
            },
            {
               "id": 2,
               "body":"Autre a dire",
               "postId":1,
               "by":1
           }]  
           break;
           case 2:
           this.commentsDatas=[{
            "id": 1,
            "body":" commentaire du deuxieme ",
            "postId":2,
            "by":1
        },
        {
           "id": 2,
           "body":"second commentaire ",
           "postId":2,
           "by":1
       }]  

        }
      
    }
    albumAction(da){
        switch (da){
            case 1:
            this.photosDatas=[{
                "id": 1,
                "url":"images/layer.png",
                "albumId":1,
                "userId":1
            },
            {
               "id": 2,
               "url":"images/layer.png",
               "albumId":1,
               "userId":2
            }]  
           break;
           case 2:
           this.photosDatas=[{
            "id": 1,
            "url":"images/layer.png",
            "albumId":2,
            "userId":1
        },
        {
           "id": 2,
           "url":"images/layer.png",
           "albumId":2,
           "userId":2
        }]  

        }
      
    }
       
     gotoAction(da){
         console.log(da);
         let marker = L.marker(L.latLng(da.latitude, da.longitude), {
             icon: L.icon({
                 iconUrl: require<any>("../../../node_modules/leaflet/dist/images/marker-icon.png"),
                 shadowUrl: require<any>("../../../node_modules/leaflet/dist/images/marker-shadow.png")
             }),
           
         })
         .bindPopup(da.name, {
             offset: L.point(12, 6)
         })
         .addTo(this.mapService.map)
         .openPopup();
        
     
     }
}
