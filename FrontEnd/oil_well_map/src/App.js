import React, { Component } from 'react';
import './App.css';
import Oilmap from './components/Oilmap';
import Axios from 'axios';
import LoadingSpinner from './components/loadingSpinner';



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
      <div className="App">
      {this.state.loading ?  <LoadingSpinner/> : <Oilmap  welldata = {this.state.data}/>}

      </div>

    );
  }
}

export default App;
