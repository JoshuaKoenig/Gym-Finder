import { DataServiceService } from './../../shared/data-service.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild('mapElement', {static: true}) public mapElement: ElementRef;
  map: google.maps.Map;

  constructor(private dataService: DataServiceService) { }

  public ngOnInit(): void 
  {
    this.getMap();
    this.getPlaces();
  }

  public getPlaces(): void
  {
    var request = {
      query: 'gym',
      fields: ['name', 'geometry'],
    };

    var service = new google.maps.places.PlacesService(this.map);

    service.findPlaceFromQuery(request, (results, status) => {
      console.log(results)
      if (status === google.maps.places.PlacesServiceStatus.OK)
      {
        this.map.setCenter(results[0].geometry.location);
      }
    })
  }

  public getMap(): void
  {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 18.5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      };

   this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }

}
