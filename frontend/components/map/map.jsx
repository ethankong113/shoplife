import React from 'react';

class Map extends React.Component {

  componentDidMount() {
    let coord = {lat: 37.7844, lng: -122.4065};
    const options = {
      zoom: 15,
      center: coord,
      disableDefaultUI: true,
      zoomControl: true,
      scrollwheel: false
    };
    const frame = document.getElementsByClassName('map')[0]
    const map = new google.maps.Map(frame, options);
    const marker = new google.maps.Marker({
      position: coord,
      map: map
    });
    // const marker2 = new google.maps.Marker({
    //   position: {lat: 37.7844, lng: -122.4066},
    //   map: map
    // });
    $('.maps').scroll(e => {
      console.log(e);
    })
  }

  render() {
    return (
     <div className="map-frame">
       <div className="map">
       </div>
     </div>
   );
 }
}

export default Map;
