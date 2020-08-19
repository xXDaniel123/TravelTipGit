export const locService = {
    getLocs: getLocs,
    getPosition: getPosition,
    createLoc: createLoc
}

var locs = [{
    lat: 11.22,
    lng: 22.11
}]

// var locations = [];

// check this initiative
function createLoc(name,lat,lng) {
    var location = {
        id: makeId(),
        name,
        lat,
        lng,
        createdAt: Date.now()
    }
    console.log(location);
    return location
}



function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}



function getPosition() {
    console.log('Getting Pos');

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}



// will be in util file later

function makeId(length=4) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(var i=0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
} 