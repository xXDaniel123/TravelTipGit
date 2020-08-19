console.log('Main!');

import { locService } from './services/loc.service.js'
import { mapService } from './services/map.service.js'


locService.getLocs()
    .then(locs => console.log('locs', locs))

window.onload = () => {
    mapService.initMap()
        .then(() => {

            mapService.addMarker({ lat: 32.0749831, lng: 34.9120554 });
        })
        .catch(console.log('INIT MAP ERROR'));

    locService.getPosition()
        .then(pos => {

            console.log('User position is:', pos.coords);
        })
        .catch(err => {
            console.log('Cannot get user-position', err);
        })

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
