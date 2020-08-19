export const mapService = {
    initMap,
    addMarker,
    panTo
}

var map;

export function initMap(lat = 32.0749831, lng = 34.9120554) {
    console.log('InitMap');
    return _connectGoogleApi()
        .then(() => {
            console.log('google available');
            map = new google.maps.Map(
                document.querySelector('#map'), {
                    center: {
                        lat,
                        lng
                    },
                    zoom: 15
                })

            // map.addListener('click', function (ev) {

            //         console.log(ev.latLng);
            //         addMarker()
            //     }
            // )

            var myLatlng = {lat: -25.363, lng: 131.044};

            var infoWindow = new google.maps.InfoWindow(
                {content: 'Click the map to get Lat/Lng!', position: myLatlng});
            infoWindow.open(map);
    
            // Configure the click listener.
            map.addListener('click', function(mapsMouseEvent) {
              // Close the current InfoWindow.
              infoWindow.close();
    
              // Create a new InfoWindow.
              infoWindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng});
              infoWindow.setContent(mapsMouseEvent.latLng.toString());

              console.log(mapsMouseEvent.latLng.toString());
              
              infoWindow.open(map);
            })


            console.log('Map!', map);
        })
}


function addMarker(loc) {
    console.log(loc);

    var marker = new google.maps.Marker({
        position: loc,
        map: map,
        title: 'Hello World!'
    });

    console.log(loc);

    return marker;
}

function panTo(lat, lng) {
    var laLatLng = new google.maps.LatLng(lat, lng);
    map.panTo(laLatLng);
}

function _connectGoogleApi() {
    if (window.google) return Promise.resolve()
    const API_KEY = ''; //TODO: Enter your API Key
    var elGoogleApi = document.createElement('script');
    elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA9t05ISePcIJn6uCDsR-FWVrCb3LjpnTw`;
    elGoogleApi.async = true;
    document.body.append(elGoogleApi);

    return new Promise((resolve, reject) => {
        elGoogleApi.onload = resolve;
        elGoogleApi.onerror = () => reject('Google script failed to load')
    })
}