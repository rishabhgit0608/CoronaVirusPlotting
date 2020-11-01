function update(){
    console.log("updating the map with real time data");
    fetch("https://www.trackcorona.live/api/countries")
    .then(response=> response.json())
    .then(res=> {
        res.data.forEach(element => {
            latitude = element.latitude
            longitude = element.longitude
            cases = element.infected
            
            //marking these on the map
            console.log(longitude)
            new mapboxgl.Marker({
                draggable: false,
                color:"#ff0000"
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
    });
    
}
let interval = 2000;
setInterval(update,interval);

