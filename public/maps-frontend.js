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
        label: "1"
      });
}

window.initMap = initMap;