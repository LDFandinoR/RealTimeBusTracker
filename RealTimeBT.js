mapboxgl.accessToken = ''; 

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbpx://styles/mapbox/streets-v11',
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

    // timer
    setTimeout(run, 15000);
}

// Request bus data from MBTA
async function getBusLocations(){
    const url = '';
    const response = await fetch(url);
    const json     = await response.json();
    return json.data;

}

//run();