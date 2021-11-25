import React from 'react';
import '../css/main.css'
import 'font-awesome/css/font-awesome.min.css';
import Axios from 'axios';
import { Card } from './Card';

class Main extends React.Component {
  state = {
    dogBreeds: [],
    // breedName:[],
    // breedId:[],
    // lifeExpectancy:[],
    // Temperament:[],
    // image:[]



  }
  componentDidMount() {
    Axios.get('http://localhost:5000/api/dogbreeds')
      .then(response => {
        this.setState({
          dogBreeds: response.data
        })
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