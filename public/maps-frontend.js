function initMap(){

    const norwich = {lat: 52.6293, lng: 1.2979}

    var options = {
        center: norwich,
        zoom: 15
    }

    map = new google.maps.Map(document.getElementById("map"), options);

    const marker = new google.maps.Marker({
        position: norwich,
        map: map,
        label: "1",
        url: '/gallery/1',
      });

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = this.url;
    });
}

window.initMap = initMap;