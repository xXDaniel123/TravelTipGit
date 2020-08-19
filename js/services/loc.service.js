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
function createLoc(id,name,lat,lng) {
    var location = {
        id,
        name,
        lat,
        lng,
        createdAt: Date.now()
    }
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