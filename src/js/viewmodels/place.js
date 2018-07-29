import ko from 'knockout';
import Place from '../models/place';

class PlaceViewModel {
  constructor(places) {
    // eslint-disable-next-line
    this.places = ko.observableArray(
      ko.utils.arrayMap(places, place => new Place(place.name, place.lat, place.lng, place.active))
    ); // eslint-disable-line
    this.activate = this.activate.bind(this);
  }

  activate(place) {
    const places = this.places();
    for (let i = 0; i < places.length; i += 1) {
      places[i].active(places[i].name === place.name);
    }
  }
}

export default PlaceViewModel;
