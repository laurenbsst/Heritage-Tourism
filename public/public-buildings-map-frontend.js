function initMap() {
  var options = {
    center: { lat: 52.6291, lng: 1.2924 },
    zoom: 15,
    timeout: 5000,
  };

  map = new google.maps.Map(document.getElementById("map"), options);

  function pinSymbol(color) {
    return {
        path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
        fillColor: color,
        fillOpacity: 1,
        strokeColor: '#000',
        strokeWeight: 2,
        scale: 1
   };
}

  var locationMarker = null;

  function autoUpdate() {
    navigator.geolocation.watchPosition(
      function (position) {
        var newPoint = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );

        if (locationMarker) {
          // Marker already created - Move it
          locationMarker.setPosition(newPoint);
        } else {
          // Marker does not exist - Create it
          locationMarker = new google.maps.Marker({
            position: newPoint,
            map: map,
            icon: pinSymbol("#C3D6A0")
          });
        }
      },
      errorHandler,
      options
    );

    function errorHandler() {
      console.log("Location tracking failed");
    }
  }
  autoUpdate();

  const theCastle = new google.maps.Marker({
    position: { lat: 52.6287, lng: 1.2962 },
    map: map,
    url: "/gallery/9",
    label: "1"
  });

  const angliaHouse = new google.maps.Marker({
    position: { lat: 52.6289, lng: 1.2984 },
    map: map,
    url: "/gallery/10",
    label: "2"
  });

  const cityHall = new google.maps.Marker({
    position: { lat: 52.6293, lng: 1.2979 },
    map: map,
    url: "/gallery/11",
    label: "3"
  });

  const theGuildhall = new google.maps.Marker({
    position: { lat: 52.6291, lng: 1.2924 },
    map: map,
    url: "/gallery/12",
    label: "4"
  });

  const theForum = new google.maps.Marker({
    position: { lat: 52.6278, lng: 1.2911 },
    map: map,
    url: "/gallery/13",
    label: "5"
  });

  const strangersHall = new google.maps.Marker({
    position: { lat: 52.6307, lng: 1.2925 },
    map: map,
    url: "/gallery/14",
    label: "6"
  });

  const theGreatHospital = new google.maps.Marker({
    position: { lat: 52.6327, lng: 1.3043 },
    map: map,
    url: "/gallery/15",
    label: "7"
  });

  google.maps.event.addListener(theCastle, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(angliaHouse, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(cityHall, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(theGuildhall, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(theForum, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(strangersHall, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(theGreatHospital, "click", function () {
    location.href = this.url;
  });
}

window.initMap = initMap;
