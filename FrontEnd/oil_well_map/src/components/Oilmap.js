import React, { Component } from 'react';
import {  Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './leaflet.css';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
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
      value:"1-10",

    }
  }

  buildMap(start , stop){
    let tempWells = [];
    for(let i =0;i<1000 ;i++){
      if( this.props.welldata[i].fake_number>=start && this.props.welldata[i].fake_number<=stop){
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
    }
    return tempWells;
  }

  filterChange(event, index, value){
    if(value === "1-10"){
      this.setState({value:"1-10", wells : this.buildMap(1,10)});
    }
    if(value === "11-20"){
      this.setState({value:"11-20", wells : this.buildMap(11,20)});
    }
    if(value === "21-30"){
      this.setState({value:"21-30",wells : this.buildMap(21,30)});
    }
    if(value === "31-40"){
      this.setState({value:"31-40",wells : this.buildMap(31,40)});
    }
    if(value === "41-50"){
      this.setState({value:"41-50",wells : this.buildMap(41,50)});
    }
    if(value === "51-60"){
      this.setState({value:"51-60",wells : this.buildMap(51,60)});
    }
    if(value === "61-70"){
      this.setState({value:"61-70",wells : this.buildMap(61,70)});
    }
    if(value === "71-80"){
      this.setState({value:"71-80",wells : this.buildMap(71,80)});
    }
    if(value === "81-90"){
      this.setState({value:"81-90",wells : this.buildMap(81,90)});
    }
    if(value === "91-100"){
      this.setState({value:"91-100",wells : this.buildMap(91,100)});
    }

  }



  componentDidMount(){
    this.setState({wells : this.buildMap(1,10)});
  }





  render() {
    const position = [this.state.lat, this.state.lng];


    const styles = {
      customWidth: {
        width: 150,
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

            <div className ="Filter">

              <SelectField
                floatingLabelText="Performance"
                value={this.state.value}
                onChange={this.filterChange.bind(this)}
              >
                <MenuItem value={"1-10"} primaryText="1-10" />
                <MenuItem value={"11-20"} primaryText="11-20" />
                <MenuItem value={"21-30"} primaryText="21-30" />
                <MenuItem value={"31-40"} primaryText="31-40" />
                <MenuItem value={"41-50"} primaryText="41-50" />
                <MenuItem value={"51-60"} primaryText="51-60" />
                <MenuItem value={"61-70"} primaryText="61-70" />
                <MenuItem value={"71-80"} primaryText="71-80" />
                <MenuItem value={"81-90"} primaryText="81-90" />
                <MenuItem value={"91-100"} primaryText="91-100" />
              </SelectField>

            </div>


          </div>
        );
  }




}



export default Oilmap;
