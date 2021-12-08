import React from 'react';
import '../css/main.css'
import 'font-awesome/css/font-awesome.min.css';
import dataService from '../services/dataService';
import { Card } from './Card';
// import {ProtectedRoute} from "./protected.route"

class Main extends React.Component {
  state = {
    dogBreeds: []
  }
  componentDidMount() {
    // Axios.get('http://localhost:5000/api/dogbreeds')
    dataService.getData((err,dogBreeds)=>{
      if(err) return console.log(err)
      this.setState({dogBreeds:dogBreeds})
    })
    
  }

  render() {
    setTimeout(()=>{console.log(this.state.dogBreeds)}, 1000)
    return (
      
      <div>
        <Card data={this.state.dogBreeds}></Card>
      </div>
    )
  }
}

export default Main;