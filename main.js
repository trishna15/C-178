mapboxgl.accessToken = "pk.eyJ1IjoidXptYTF3aGpyYmZzIiwiYSI6ImNsaTk3aTV3NzF6cHgzcW1sNzA2Nmx4dDEifQ.K9ZqSktp1Lh7-m6ccrFu5g"

latitude = 19.0760 , longitude = 72.8777

 var map = new mapboxgl.Map({
    container:"map",
    style:"mapbox://styles/mapbox/streets-v11",
    center:[longitude, latitude],
    zoom:16
 })
 map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{enableHighAccuracy:true},
        trackUserLocation: true
    })
 )
 map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    "top-left"
 )