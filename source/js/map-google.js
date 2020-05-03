var mapFunction = function() {
  var element = document.getElementById("map");
  google.maps.event.addDomListener(window, "load", initMap);
  google.maps.event.addDomListener(window, "resize", resizeMap);
  var map;
  var marker;
  var getScreenWidth = function () {
    return window.innerWidth;
  }

  function initMap() {
    var mapOptions = {
      zoom: 17,
      mapTypeControl: false,
      zoomControl: true,
      scrollwheel: false,
      streetViewControl: false,
      center: {lat: 59.939181, lng: 30.321469}
    };

    map = new google.maps.Map(element, mapOptions);

    var markerOptions = {
      position: {lat: 59.938790, lng: 30.323199},
      map: map,
      optimized: false
    };

    marker = new google.maps.Marker(markerOptions)
    resizeMap();
  };

  function resizeMap() {
    google.maps.event.trigger(map, "resize");
    google.maps.event.trigger(marker, "resize");
    width = getScreenWidth();

    if(width < 768) {
      anchor = new google.maps.Point(31, 53)
      scaled = new google.maps.Size(64, 53)
    } else {
      anchor = new google.maps.Point(62, 106)
      scaled = new google.maps.Size(124, 106)
    };

    var image = {
      url: "img/map-pin.png",
      size: new google.maps.Size(124, 106),
      origin: new google.maps.Point(0, 0),
      anchor: anchor,
      scaledSize: scaled
    };

    if (width < 768) {
      marker.setIcon(image);
      map.panTo({lat: 59.938850, lng: 30.323199});
    } else if (768 <= width && width < 1300) {
      map.panTo({lat: 59.939073, lng: 30.323199});
      marker.setIcon(image);
    } else if (width > 1300) {
      map.panTo({lat: 59.939095, lng: 30.319550});
      marker.setIcon(image);
    };
  };
};
mapFunction();
