function initMap() {
  var options = {
    center: { lat: 52.6291, lng: 1.2924 },
    zoom: 15
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
  
  const allSaintsChurch = new google.maps.Marker({
    position: { lat: 52.6259, lng: 1.2956 },
    map: map,
    url: "/gallery/1",
    label: "1"
  });

  const stStephensChurch = new google.maps.Marker({
    position: { lat: 52.6266, lng: 1.2922 },
    map: map,
    url: "/gallery/2",
    label: "2"
  });

  const stPeterMancroftChurch = new google.maps.Marker({
    position: { lat: 52.6279, lng: 1.2925 },
    map: map,
    url: "/gallery/3",
    label: "3"
  });

  const stAndrewsChurch = new google.maps.Marker({
    position: { lat: 52.6305, lng: 1.2955 },
    map: map,
    url: "/gallery/4",
    label: "4"
  });

  const stLaurencesChurch = new google.maps.Marker({
    position: { lat: 52.6311, lng: 1.2901 },
    map: map,
    url: "/gallery/5",
    label: "5"
  });

  const stMargaretsChurch = new google.maps.Marker({
    position: { lat: 52.6315, lng: 1.2887 },
    map: map,
    url: "/gallery/6",
    label: "6"
  });

  const stBenedictsChurch = new google.maps.Marker({
    position: { lat: 52.6312, lng: 1.2861 },
    map: map,
    url: "/gallery/7",
    label: "7"
  });

  const stGregorysChurch = new google.maps.Marker({
    position: { lat: 52.6303, lng: 1.2888 },
    map: map,
    url: "/gallery/8",
    label: "8"
  });

  google.maps.event.addListener(allSaintsChurch, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(stStephensChurch, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(stPeterMancroftChurch, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(stAndrewsChurch, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(stLaurencesChurch, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(stMargaretsChurch, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(stBenedictsChurch, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(stGregorysChurch, "click", function () {
    location.href = this.url;
  });
}

window.initMap = initMap;
