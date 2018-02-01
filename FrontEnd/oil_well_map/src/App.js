import React, { Component } from 'react';
import './App.css';
import Oilmap from './components/Oilmap';
import WellsInfo from './components/WellsInfo';
import Axios from 'axios';
import LoadingSpinner from './components/loadingSpinner';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [20], // will hold the results from our ajax call
      loading: false, // will be true when ajax request is running
    }
  }


  componentWillMount(){
    //when the page load, we will get the wells info from the backend.
    this.setState({loading:true});
    Axios.get('http://localhost:8080/api/getwellsinfo')
    .then(result => {
      // after we got the data from the backend, we will sort the data into 20 seperate lists base on the well's Performance(the fake number). This way we would not have to iterate the whole list again and again.
      let tempdata = [];
      for(let x = 0;x<20;x++){
        tempdata[x] = new Array();
      }

      for(let i = 0; i<result.data.length;i++){
        if( result.data[i].fake_number>=1 && result.data[i].fake_number<=5){
          tempdata[0].push(result.data[i]);
        }
        if( result.data[i].fake_number>=6 && result.data[i].fake_number<=10){
          tempdata[1].push(result.data[i]);
        }
        if( result.data[i].fake_number>=11 && result.data[i].fake_number<=15){
          tempdata[2].push(result.data[i]);
        }
        if( result.data[i].fake_number>=16 && result.data[i].fake_number<=20){
          tempdata[3].push(result.data[i]);
        }
        if( result.data[i].fake_number>=21 && result.data[i].fake_number<=25){
          tempdata[4].push(result.data[i]);
        }
        if( result.data[i].fake_number>=26 && result.data[i].fake_number<=30){
          tempdata[5].push(result.data[i]);
        }
        if( result.data[i].fake_number>=31 && result.data[i].fake_number<=35){
          tempdata[6].push(result.data[i]);
        }
        if( result.data[i].fake_number>=36 && result.data[i].fake_number<=40){
          tempdata[7].push(result.data[i]);
        }
        if( result.data[i].fake_number>=41 && result.data[i].fake_number<=45){
          tempdata[8].push(result.data[i]);
        }
        if( result.data[i].fake_number>=46 && result.data[i].fake_number<=50){
          tempdata[9].push(result.data[i]);
        }
        if( result.data[i].fake_number>=51 && result.data[i].fake_number<=55){
          tempdata[10].push(result.data[i]);
        }
        if( result.data[i].fake_number>=56 && result.data[i].fake_number<=60){
          tempdata[11].push(result.data[i]);
        }
        if( result.data[i].fake_number>=61 && result.data[i].fake_number<=65){
          tempdata[12].push(result.data[i]);
        }
        if( result.data[i].fake_number>=66 && result.data[i].fake_number<=70){
          tempdata[13].push(result.data[i]);
        }
        if( result.data[i].fake_number>=71 && result.data[i].fake_number<=75){
          tempdata[14].push(result.data[i]);
        }
        if( result.data[i].fake_number>=76 && result.data[i].fake_number<=80){
          tempdata[15].push(result.data[i]);
        }
        if( result.data[i].fake_number>=81 && result.data[i].fake_number<=85){
          tempdata[16].push(result.data[i]);
        }
        if( result.data[i].fake_number>=86 && result.data[i].fake_number<=90){
          tempdata[17].push(result.data[i]);
        }
        if( result.data[i].fake_number>=91 && result.data[i].fake_number<=95){
          tempdata[18].push(result.data[i]);
        }
        if( result.data[i].fake_number>=96 && result.data[i].fake_number<=100){
          tempdata[19].push(result.data[i]);
        }
      }

      this.setState({loading: false,data: tempdata});
      }
    );

  }


  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          {/*after the we got the data and sorted, we will render the children components with the data as props.*/}
          {this.state.loading ?  <LoadingSpinner/> : <div className="Inner"> <WellsInfo  welldata = {this.state.data}/> <Oilmap  welldata = {this.state.data}/> </div>}
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
