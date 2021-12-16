import React from 'react';
import '../css/main.css'
import 'font-awesome/css/font-awesome.min.css';
import dataService from '../services/dataService';
import { Card } from './Card';
// import {ProtectedRoute} from "./protected.route"

class Main extends React.Component {
  state = {
    dogBreeds: [],
    search: ''
  }
  componentDidMount() {
    // Axios.get('http://localhost:5000/api/dogbreeds')
    dataService.getData((err, dogBreeds) => {
      if (err) return console.log(err)
      this.setState({ dogBreeds: dogBreeds })
    })

  }

  deleteHandler = (dogId) => {
    if (window.confirm('Are you sure to delete?')) {
      dataService.DeleteData((err) => {
        if (err) return console.log(err)

        //remove the deleted dog from state.
        //filter and setState
        const remain = this.state.dogBreeds
          .filter((dog) => dog._id !== dogId)
        this.setState({ dogBreeds: remain })


        console.log(remain)





      }, dogId)
    }
  }

  searchHandler = (event) => {
    this.setState({ search: event.target.value })
  }




  render() {
    // setTimeout(()=>{console.log(this.state.dogBreeds)}, 1000)
    return (

      <div>
        <section className="jumbotron text-center">
          <div className="container">
            <div className="input-group">
              <input onChange={this.searchHandler} type="text" className="form-control" placeholder="Search this site" name="search" />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
          {this.state.search.length !== 0 && this.state.dogBreeds
            .filter(dog => dog.breedName.toLowerCase().includes(this.state.search))
            .map((dog, index) => {
              return (<Card key={index} dog={dog}
                dogDelete={this.deleteHandler}
                searchHandler={this.searchHandler.bind(this)}
              />)

            }

              //     <ul key={dog._id} class="list-group card card-1">
              //     <li class="list-group-item">{dog.breedName}</li>
              // </ul>

            )
          }
          {this.state.search.length === 0 && this.state.dogBreeds.map((dog, index) => {
            return (<Card key={index} dog={dog}
              dogDelete={this.deleteHandler}
              searchHandler={this.searchHandler.bind(this)}
            ></Card>)
          })}

        </div>
      </div>
       </div>
       </div>
    )
  }
}

export default Main;