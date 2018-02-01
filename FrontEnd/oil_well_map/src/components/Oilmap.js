import React, { Component } from 'react';
import {  Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './leaflet.css';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Oilmap extends Component {



  constructor(props) {
    super(props);
    this.state = {
      lat: 39,
      lng: -100,
      zoom: 5,
      loading: false, // will be true when ajax request is running
      wells:[],
      value:"1-5",

    }
  }
  // the method for building map and the wells' markers
  buildMap(index){
    let tempWells = [];
    for(let i =0;i<this.props.welldata[index].length ;i++){

        const image = new L.Icon({
          iconUrl: 'marker.png',
          iconSize:     [40 + (this.props.welldata[index][i].fake_number/2), 40+ (this.props.welldata[index][i].fake_number/2)], // size of the icon
        });
        tempWells.push(

          <Marker position={[this.props.welldata[index][i].lat, this.props.welldata[index][i].long]} icon = {image}>
            <Popup>
              <span>
                {this.props.welldata[index][i].uwi} <br /> {this.props.welldata[index][i].operator}
              </span>
            </Popup>
          </Marker>
        );

    }
    return tempWells;
  }
  //when the user change the filter, we will rebuild the map and the markers
  filterChange(event, index, value){
    if(value === "1-5"){
      this.setState({value:"1-5", wells : this.buildMap(0)});
    }
    if(value === "6-10"){
      this.setState({value:"6-10", wells : this.buildMap(1)});
    }
    if(value === "11-15"){
      this.setState({value:"11-15", wells : this.buildMap(2)});
    }
    if(value === "16-20"){
      this.setState({value:"16-20", wells : this.buildMap(3)});
    }
    if(value === "21-25"){
          this.setState({value:"21-25", wells : this.buildMap(4)});
    }
    if(value === "26-30"){
      this.setState({value:"26-30", wells : this.buildMap(5)});
    }
    if(value === "31-5"){
      this.setState({value:"31-35", wells : this.buildMap(6)});
    }
    if(value === "36-40"){
      this.setState({value:"36-40", wells : this.buildMap(7)});
    }
    if(value === "41-45"){
      this.setState({value:"41-45", wells : this.buildMap(8)});
    }
    if(value === "46-50"){
      this.setState({value:"46-50", wells : this.buildMap(9)});
    }
    if(value === "51-55"){
      this.setState({value:"51-55", wells : this.buildMap(10)});
    }
    if(value === "56-60"){
      this.setState({value:"56-60", wells : this.buildMap(11)});
    }
    if(value === "61-65"){
      this.setState({value:"61-65", wells : this.buildMap(12)});
    }
    if(value === "66-70"){
      this.setState({value:"66-70", wells : this.buildMap(13)});
    }
    if(value === "71-75"){
      this.setState({value:"71-75", wells : this.buildMap(14)});
    }
    if(value === "76-80"){
      this.setState({value:"76-80", wells : this.buildMap(15)});
    }
    if(value === "81-85"){
      this.setState({value:"81-85", wells : this.buildMap(16)});
    }
    if(value === "86-90"){
      this.setState({value:"86-90", wells : this.buildMap(17)});
    }
    if(value === "91-95"){
      this.setState({value:"91-95", wells : this.buildMap(18)});
    }
    if(value === "96-100"){
      this.setState({value:"96-100", wells : this.buildMap(19)});
    }
  }



  componentDidMount(){
    this.setState({wells : this.buildMap(0)});
  }





  render() {
    const position = [this.state.lat, this.state.lng];

    const styles = {
      customWidth: {
        width: 100,
      },
    };



        return (
          <div className="Leaflet">
            <Map center={position} zoom={this.state.zoom}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
              />
              {this.state.wells}
            </Map>

            <div className ="mapFilter">
              <div className = "Filter">
                <p className ="filterLabel">Filter By Performance:  </p>
                <SelectField
                  value={this.state.value}
                  style={styles.customWidth}
                  onChange={this.filterChange.bind(this)}
                >
                  <MenuItem value={"1-5"} primaryText="1-5" />
                  <MenuItem value={"6-10"} primaryText="6-10" />
                  <MenuItem value={"11-15"} primaryText="11-15" />
                  <MenuItem value={"16-20"} primaryText="16-20" />
                  <MenuItem value={"21-25"} primaryText="21-25" />
                  <MenuItem value={"26-30"} primaryText="26-30" />
                  <MenuItem value={"31-35"} primaryText="31-35" />
                  <MenuItem value={"36-40"} primaryText="36-40" />
                  <MenuItem value={"41-45"} primaryText="41-45" />
                  <MenuItem value={"46-50"} primaryText="46-50" />
                  <MenuItem value={"51-55"} primaryText="51-55" />
                  <MenuItem value={"56-60"} primaryText="56-60" />
                  <MenuItem value={"61-65"} primaryText="61-65" />
                  <MenuItem value={"66-70"} primaryText="66-70" />
                  <MenuItem value={"71-75"} primaryText="71-75" />
                  <MenuItem value={"76-80"} primaryText="76-80" />
                  <MenuItem value={"81-85"} primaryText="81-85" />
                  <MenuItem value={"86-90"} primaryText="86-90" />
                  <MenuItem value={"91-95"} primaryText="91-95" />
                  <MenuItem value={"96-100"} primaryText="96-100" />
                </SelectField>

              </div>
            </div>

          </div>
        );
  }




}



export default Oilmap;
