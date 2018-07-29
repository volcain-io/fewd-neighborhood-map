import ko from 'knockout';

class Place {
  constructor(name, lat, lng, isActive = false) {
    this.name = ko.observable(name);
    this.lat = ko.observable(lat);
    this.lng = ko.observable(lng);
    this.active = ko.observable(isActive);
  }
}

export default Place;
