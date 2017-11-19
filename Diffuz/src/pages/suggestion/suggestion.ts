import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-suggestion',
  templateUrl: 'suggestion.html'
})

export class SuggestionPage {
  coords = []
  coordsLieu = [{lat:47.300963, lng:-1.499277}, {lat:47.169911,lng:-1.468949}]
  dist = []
  dist2 = []
  constructor(public navCtrl: NavController, public geolocation: Geolocation) {
    this.geolocation.getCurrentPosition().then((resp) => {
          this.coords.push({
             lat:  resp.coords.latitude,
             lng:  resp.coords.longitude
          });
          this.fillDistTab();
          }).catch((error) => {
            console.log('Error getting location', error);
          });
    console.log(this.dist2)
  }

  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
   }

   deg2rad(deg) {
    return deg * (Math.PI/180)
   }

   fillDistTab() {
     for (let coord of this.coords){
       let distance = this.getDistanceFromLatLonInKm(coord.lat, coord.lng,this.coordsLieu[0].lat,this.coordsLieu[0].lng);
       let distance2 = this.getDistanceFromLatLonInKm(coord.lat, coord.lng,this.coordsLieu[1].lat,this.coordsLieu[1].lng);
       this.dist2.push(distance.toFixed(2));
       this.dist2.push(distance2.toFixed(2));
       this.dist.push(this.dist2);
     }
   }
}
