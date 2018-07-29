/* global google */
/* global $ */

export default {
  init: (lat = 41.0054958, lng = 28.8720969, zoom = 10) => {
    if (!$.googleMap) {
      const mapCanvas = document.getElementById('map');
      const mapOptions = {
        center: { lat, lng },
        zoom
      };

      $.googleMap = new google.maps.Map(mapCanvas, mapOptions);
    }
  },

  getMap: () => $.googleMap,

  getPlaces: () => [
    {
      name: 'Hagia Sophia',
      lat: 41.008583,
      lng: 28.980175,
      active: true
    },
    {
      name: 'Sultan Ahmed Mosque',
      lat: 41.00541,
      lng: 28.976814
    },
    {
      name: 'Topkapı Palace',
      lat: 41.011519,
      lng: 28.983379
    },
    {
      name: 'Bosphorus',
      lat: 41.221313,
      lng: 29.129016
    },
    {
      name: 'Grand Bazaar',
      lat: 40.780933,
      lng: -73.977723
    },
    {
      name: 'Basilica Cistern',
      lat: 41.008384,
      lng: 28.977878
    },
    {
      name: 'Dolmabahçe Palace',
      lat: 41.039164,
      lng: 29.000459
    },
    {
      name: 'Spice Bazaar',
      lat: 33.117865,
      lng: -96.80289
    },
    {
      name: 'Taksim Square',
      lat: 41.037002,
      lng: 28.985092
    },
    {
      name: 'Süleymaniye Mosque',
      lat: 41.016177,
      lng: 28.964153
    }
  ]
};
