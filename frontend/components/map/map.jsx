import React from 'react';

class Map extends React.Component {

  componentWillMount() {
    const {tripId, fetchMarkers} = this.props;
    fetchMarkers(tripId);
  }

  componentWillUpdate(nextProps) {
    const { tripId, fetchMarkers, markers } = this.props;
    if (tripId !== nextProps.tripId) {
      fetchMarkers(nextProps.tripId);
    }
    if (markers.length !== nextProps.markers.length || this.isNewMarker(markers, nextProps.markers)) {
      this.renderMap(nextProps.markers);
    }
  }

  isNewMarker(markers, newMarkers) {
    let oldList = markers.map((marker) => marker.id);
    let newList = newMarkers.map((marker) => marker.id);
    for (let i = 0; i < oldList.length; i++) {
      if (oldList[i] !== newList[i]) {
        return true;
      }
    }
    return false;
  }

  renderMap(markers) {
    if (markers.length !== 0) {
      let center = {lat: parseFloat(markers[0].lat), lng: parseFloat(markers[0].lng)};

      const options = {
        zoom: 15,
        center,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false
      };

      const frame = document.getElementsByClassName('map')[0];
      const map = new google.maps.Map(frame, options);

      markers.forEach((marker) => {
        let lat = parseFloat(marker.lat);
        let lng = parseFloat(marker.lng);
        let newMarker = new google.maps.Marker({
          position: {lat, lng},
          map: map,
          key: marker.id
        });
        newMarker.addListener('mouseover', function(e) {
          $(`#product-item-${newMarker.key}`).addClass('selected');
        });
        newMarker.addListener('mouseout', function(e) {
          $(`#product-item-${newMarker.key}`).removeClass('selected');
        });
        newMarker.addListener('click', function(e) {
          $(`#product-item-${newMarker.key}`).click();
        });
      });
    }
  }

  componentWillUnmount() {
    this.props.clearMarkers();
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
