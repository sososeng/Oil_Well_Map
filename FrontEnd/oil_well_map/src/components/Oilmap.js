import React, { Component } from 'react';
import {  Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './leaflet.css';
class Oilmap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: 39,
      lng: -100,
      zoom: 5,

      loading: false, // will be true when ajax request is running
      wells:[],
    }
  }

  componentDidMount(){


    let tempWells = [];

    for(let i =0;i<50 ;i++){
      const image = new L.Icon({
        iconUrl: 'marker.png',
        iconSize:     [40 + (this.props.welldata[i].fake_number/2), 40+ (this.props.welldata[i].fake_number/2)], // size of the icon
      });
      tempWells.push(

        <Marker position={[this.props.welldata[i].lat, this.props.welldata[i].long]} icon = {image}>
          <Popup>
            <span>
              {this.props.welldata[i].uwi} <br /> {this.props.welldata[i].operator}
            </span>
          </Popup>
        </Marker>
      );
    }

    this.setState({wells : this.state.wells.concat(tempWells)});

  }


  render() {
    const position = [this.state.lat, this.state.lng];

        return (
          <div className="Leaflet">
            <Map center={position} zoom={this.state.zoom}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
              />
              {this.state.wells}
            </Map>


          </div>
        );
  }


}

export default Oilmap;
