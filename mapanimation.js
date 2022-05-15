mapboxgl.accessToken = 'pk.eyJ1IjoibGF1ZmFuZGlub3IiLCJhIjoiY2wydm1uYnFhMGRhczNjcGZzdzNrOXA1eSJ9.Et9DlEQzD6kmGzAcWxydLA'; 

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14
});

var marker = new mapboxgl.Marker()
        .setLngLat([-71.104081, 42.365554])
        .addTo(map);
        


async function run(){
    // get bus data    
	const locations = await getBusLocations();
	console.log(new Date());
	console.log(locations);
    marker.setLngLat([locations[0].attributes.longitude, locations[0].attributes.latitude])

    // timer
    setTimeout(run, 15000);
} 

// Request bus data from MBTA
async function getBusLocations(){
    const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
    const response = await fetch(url);
    const json     = await response.json();
    return json.data;

}

//run();