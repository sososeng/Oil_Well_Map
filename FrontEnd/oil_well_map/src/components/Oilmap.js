import React, { Component } from 'react';
import {  Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './leaflet.css';
class Oilmap extends Component {
  state = {
     lat: 51.505,
     lng: -0.09,
     zoom: 13,
   }



  render() {
    const position = [this.state.lat, this.state.lng];
    const image = new L.Icon({
                   iconUrl: 'https://www.circleofash.com/wp-content/uploads/2016/08/square_map_marker_centered.png',
                   iconSize:     [50, 50], // size of the icon


               });
        return (
          <div className="Leaflet">
            <Map center={position} zoom={this.state.zoom}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
              />
              <Marker position={position}>
                <Popup>
                  <span>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </span>
                </Popup>
              </Marker>
              <Marker position={[41.505,-1.09]} icon={image}>
                <Popup>
                  <span>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </span>
                </Popup>
              </Marker>
            </Map>
          </div>
        );
  }


}

export default Oilmap;
