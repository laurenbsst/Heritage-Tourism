function initMap() {
  var options = {
    center: { lat: 52.6291, lng: 1.2924 },
    zoom: 15,
    timeout: 5000,
  };

  map = new google.maps.Map(document.getElementById("map"), options);

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
          });
        }

        // Center the map on the new position
        map.setCenter(newPoint);
      },
      errorHandler,
      options
    );

    function errorHandler() {
      console.log("Location tracking failed");
    }
  }
  autoUpdate();
  
  const allSaintsChurch = new google.maps.Marker({
    position: { lat: 52.6259, lng: 1.2956 },
    map: map,
    url: "/gallery/1",
  });

  const stPeterMancroftChurch = new google.maps.Marker({
    position: { lat: 52.6279, lng: 1.2925 },
    map: map,
    url: "/gallery/1",
  });

  const stStephensChurch = new google.maps.Marker({
    position: { lat: 52.6266, lng: 1.2922 },
    map: map,
    url: "/gallery/1",
  });

  const stAndrewsChurch = new google.maps.Marker({
    position: { lat: 52.6305, lng: 1.2955 },
    map: map,
    url: "/gallery/1",
  });

  const stBenedictsChurch = new google.maps.Marker({
    position: { lat: 52.6312, lng: 1.2861 },
    map: map,
    url: "/gallery/1",
  });

  const stLaurencesChurch = new google.maps.Marker({
    position: { lat: 52.6311, lng: 1.2901 },
    map: map,
    url: "/gallery/1",
  });

  const stMargaretsChurch = new google.maps.Marker({
    position: { lat: 52.6315, lng: 1.2887 },
    map: map,
    url: "/gallery/1",
  });

  const stGregorysChurch = new google.maps.Marker({
    position: { lat: 52.6303, lng: 1.2888 },
    map: map,
    url: "/gallery/1",
  });

  const theCastle = new google.maps.Marker({
    position: { lat: 52.6287, lng: 1.2962 },
    map: map,
    url: "/gallery/1",
  });

  const theGuildhall = new google.maps.Marker({
    position: { lat: 52.6291, lng: 1.2924 },
    map: map,
    url: "/gallery/1",
  });

  const angliaHouse = new google.maps.Marker({
    position: { lat: 52.6289, lng: 1.2984 },
    map: map,
    url: "/gallery/1",
  });

  const cityHall = new google.maps.Marker({
    position: { lat: 52.6293, lng: 1.2979 },
    map: map,
    url: "/gallery/1",
  });

  const theForum = new google.maps.Marker({
    position: { lat: 52.6278, lng: 1.2911 },
    map: map,
    url: "/gallery/1",
  });

  const strangersHall = new google.maps.Marker({
    position: { lat: 52.6307, lng: 1.2925 },
    map: map,
    url: "/gallery/1",
  });

  const theGreatHospital = new google.maps.Marker({
    position: { lat: 52.6327, lng: 1.3043 },
    map: map,
    url: "/gallery/1",
  });

  google.maps.event.addListener(theGreatHospital, "click", function () {
    window.location.href = this.url;
  });
}

window.initMap = initMap;
