console.log('Main!');

import {
    locService
} from './services/loc.service.js'
import {
    mapService
} from './services/map.service.js'


locService.getLocs()
    .then(locs => console.log('locs', locs))

window.onload = () => {
    mapService.initMap()
        .then(() => {

            mapService.addMarker({
                lat: 32.0749831,
                lng: 34.9120554
            });
        })
        .catch(console.log('INIT MAP ERROR'));

    locService.getPosition()
        .then(pos => {

            console.log('User position is:', pos.coords);
        })
        .catch(err => {
            console.log('Cannot get user-position', err);
        })



}

document.querySelector('.btn').addEventListener('click', (ev) => {
    console.log('Aha!', ev.target);
    mapService.panTo(35.6895, 139.6917);
})



//--------------------GETTING MY CURRENT LOCATION----------------------//

let map, infoWindow;

document.querySelector('.my-location').addEventListener('click', (ev) => {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 14
    });
    infoWindow = new google.maps.InfoWindow();

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                infoWindow.setPosition(pos);
                infoWindow.setContent("Location found.");
                infoWindow.open(map);
                map.setCenter(pos);
                console.log(pos)
            },
            () => {
                handleLocationError(true, infoWindow, map.getCenter());
            }
        );
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
})

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation ?
        "Error: The Geolocation service failed." :
        "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
};

        document.querySelector('.go').addEventListener('click', onShowLoc)
}

// document.querySelector('.btn').addEventListener('click', (ev) => {
//     console.log('Aha!', ev.target);
//     mapService.panTo(35.6895, 139.6917);
// })

function onShowLoc(){

    const elInput =  document.querySelector('.text-field')
    console.log(elInput.value);
    
    mapService.getLocByName(elInput.value)
        .then(res => res.data)
        .then(console.log(res.data))


    // console.log(elInput.value);
    // mapService.panTo(35.6895, 139.6917);

}
