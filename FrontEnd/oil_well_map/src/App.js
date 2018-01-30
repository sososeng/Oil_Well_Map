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
      data: {}, // will hold the results from our ajax call
      loading: false, // will be true when ajax request is running
    }
  }


  componentWillMount(){

    this.setState({loading:true});
    Axios.get('http://localhost:8080/api/getwellsinfo')
    .then(result => this.setState({
        loading: false,
        data: result.data,
      }));

  }


  render() {
    return (
      <MuiThemeProvider>
        <div className="App">

          {this.state.loading ?  <LoadingSpinner/> : <div><WellsInfo  welldata = {this.state.data}/> <Oilmap  welldata = {this.state.data}/> </div>}
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
