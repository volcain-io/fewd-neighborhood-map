/* global $ */
import ko from 'knockout';
import GoogleMapsAPI from './api/google-maps';
import PlaceViewModel from './viewmodels/place';

$(() => {
  const places = GoogleMapsAPI.getPlaces();
  GoogleMapsAPI.init(places[0].lat, places[0].lng, 13);
  const vm = new PlaceViewModel(places);
  ko.applyBindings(vm);
});
