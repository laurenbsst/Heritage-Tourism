function initMap() {
  var options = {
    center: { lat: 52.6291, lng: 1.2924 },
    zoom: 15,
    timeout: 5000,
  };

  map = new google.maps.Map(document.getElementById("map"), options);
  
  const allSaintsChurch = new google.maps.Marker({
    position: { lat: 52.6259, lng: 1.2956 },
    map: map,
    url: "/gallery/1",
  });

  const stPeterMancroftChurch = new google.maps.Marker({
    position: { lat: 52.6279, lng: 1.2925 },
    map: map,
    url: "/gallery/2",
  });

  const stStephensChurch = new google.maps.Marker({
    position: { lat: 52.6266, lng: 1.2922 },
    map: map,
    url: "/gallery/3",
  });

  const stAndrewsChurch = new google.maps.Marker({
    position: { lat: 52.6305, lng: 1.2955 },
    map: map,
    url: "/gallery/4",
  });

  const stBenedictsChurch = new google.maps.Marker({
    position: { lat: 52.6312, lng: 1.2861 },
    map: map,
    url: "/gallery/5",
  });

  const stLaurencesChurch = new google.maps.Marker({
    position: { lat: 52.6311, lng: 1.2901 },
    map: map,
    url: "/gallery/6",
  });

  const stMargaretsChurch = new google.maps.Marker({
    position: { lat: 52.6315, lng: 1.2887 },
    map: map,
    url: "/gallery/7",
  });

  const stGregorysChurch = new google.maps.Marker({
    position: { lat: 52.6303, lng: 1.2888 },
    map: map,
    url: "/gallery/8",
  });

  const theCastle = new google.maps.Marker({
    position: { lat: 52.6287, lng: 1.2962 },
    map: map,
    url: "/gallery/9",
  });

  const theGuildhall = new google.maps.Marker({
    position: { lat: 52.6291, lng: 1.2924 },
    map: map,
    url: "/gallery/10",
  });

  const angliaHouse = new google.maps.Marker({
    position: { lat: 52.6289, lng: 1.2984 },
    map: map,
    url: "/gallery/11",
  });

  const cityHall = new google.maps.Marker({
    position: { lat: 52.6293, lng: 1.2979 },
    map: map,
    url: "/gallery/12",
  });

  const theForum = new google.maps.Marker({
    position: { lat: 52.6278, lng: 1.2911 },
    map: map,
    url: "/gallery/13",
  });

  const strangersHall = new google.maps.Marker({
    position: { lat: 52.6307, lng: 1.2925 },
    map: map,
    url: "/gallery/14",
  });

  const theGreatHospital = new google.maps.Marker({
    position: { lat: 52.6327, lng: 1.3043 },
    map: map,
    url: "/gallery/15",
  });

  google.maps.event.addListener(allSaintsChurch, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(stPeterMancroftChurch, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(stStephensChurch, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(stAndrewsChurch, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(stBenedictsChurch, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(stLaurencesChurch, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(stMargaretsChurch, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(stGregorysChurch, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(theCastle, "click", function () {
    this.window.location.href = this.url;
  });
  google.maps.event.addListener(theGuildhall, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(angliaHouse, "click", function () {
    location.href = this.url;
  });
  google.maps.event.addListener(cityHall, "click", function () {
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
