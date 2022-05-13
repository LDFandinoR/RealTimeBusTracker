mapboxgl.accessToken = 'pk.eyJ1IjoibGF1ZmFuZGlub3IiLCJhIjoiY2wydm1uYnFhMGRhczNjcGZzdzNrOXA1eSJ9.Et9DlEQzD6kmGzAcWxydLA'; 

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 10
});

var marker = new mapboxgl.Marker()
        .setLngLat([-71.104081, 42.365554])
        .addTo(map);
        


async function run(){
    // get bus data    
	const locations = await getBusLocations();
	console.log(new Date());
	console.log(locations);

    // timer
    setTimeout(run, 30000);
}
accessToken_MBTA = '1e157437-6641-4e9b-b594-ac553e14a244';
// Request bus data from MBTA
async function getBusLocations(){
    const url = ;
    const response = await fetch(url);
    const json     = await response.json();
    return json.data;

}

//run();