import './css/styles.css';
const svgMarker = {
    path: "M16 2c-2.916 0.003-5.712 1.163-7.774 3.226s-3.222 4.858-3.226 7.774c-0.003 2.383 0.775 4.702 2.216 6.6 0 0 0.3 0.395 0.349 0.452l8.435 9.948 8.439-9.953c0.044-0.053 0.345-0.447 0.345-0.447l0.001-0.003c1.44-1.897 2.218-4.215 2.215-6.597-0.003-2.916-1.163-5.712-3.226-7.774s-4.858-3.222-7.774-3.226zM16 17c-0.791 0-1.565-0.235-2.222-0.674s-1.171-1.064-1.473-1.795c-0.303-0.731-0.382-1.535-0.228-2.311s0.535-1.489 1.095-2.048c0.559-0.559 1.272-0.94 2.048-1.095s1.58-0.075 2.311 0.228 1.356 0.815 1.795 1.473c0.44 0.658 0.674 1.431 0.674 2.222-0.001 1.060-0.423 2.077-1.173 2.827s-1.766 1.172-2.827 1.173z",
    fillColor: "#1A1A1A",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 1, 
};
const svgPhone = {   
    path: "M28 22.56v4c0.003 0.751-0.311 1.468-0.864 1.976s-1.295 0.759-2.043 0.691c-4.103-0.446-8.044-1.848-11.507-4.093-3.222-2.047-5.953-4.778-8-8-2.253-3.478-3.656-7.439-4.093-11.56-0.067-0.745 0.182-1.485 0.686-2.038s1.218-0.868 1.967-0.869h4c1.338-0.013 2.479 0.968 2.667 2.293 0.169 1.28 0.482 2.537 0.933 3.747 0.366 0.975 0.132 2.073-0.6 2.813l-1.693 1.693c1.898 3.338 4.662 6.102 8 8l1.693-1.693c0.74-0.732 1.839-0.966 2.813-0.6 1.21 0.451 2.467 0.765 3.747 0.933 1.341 0.189 2.327 1.353 2.293 2.707z",
    fillColor: "#1A1A1A",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 1, 

  }
    const contentString =
    '<div class="content">' +    
    '<h1 class="content__title">Voodoo</h1>'+   
    '<p>137 Glasgow St., Unit 115 Kitchener, ON N2G 4X8</p>'+
    '<p>Canada</p>'+
    '<ul><li>1-800-480-9597</li>' +
    '<li>info@voodoo.com</li></ul>'+
    "</div>";
function initMap() {
  const uluru = { lat: 44.4943641667, lng:  -79.7271590642,  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
      center: uluru,
      disableDefaultUI: true,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: svgMarker,
  });

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Uluru",
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

window.initMap = initMap;




//   const marker = new google.maps.Marker({
//       position: uluru,
//       map: map,
//       icon: './img/carbon_location-filled.png',
//   });
//         const info = new google.maps.InfoWindow({
//         content: '<h3>Voodoo</h3><p>1-800-480-959</p>',
//           map: map,
//     })
    // marker.addEvenListener('click', function () {
    //     info.open(map, marker);
    // })


