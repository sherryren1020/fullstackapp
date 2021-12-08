import React from 'react';
import dataService from '../services/dataService';
class CreateForm extends React.Component {
state={
    breedName: '', 
    lifeExpectancy:'',
    Temperament:[],
    image:''
}

handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}

handleSubmit=(e)=>{
    // e.preventDefault();
    dataService.addData((err)=>{
        if(err) return console.log(err)
    },this.state)

}
render (){
    return(
        <form className="form-signin" onSubmit={this.handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal text-center">Add new breed</h1>
        <label  className="sr-only">breedName</label>
        <input onChange={this.handleChange} 
        type="text" 
        name="breedName"  
        className="form-control" 
        placeholder="breedName"
          autoFocus />
        <label htmlFor="inputPassword" className="sr-only">lifeExpectancy</label>
        <input  onChange={this.handleChange} 
        type="text" 
        name="lifeExpectancy" 
        className="form-control" 
        placeholder="lifeExpectancy" />
        <label  className="sr-only">Temperament</label>
        <input onChange={this.handleChange} 
        type="text" 
        name="temperament" 
        className="form-control" 
        placeholder="Temperament"
          autoFocus />
          <label htmlFor="inputEmail" className="sr-only">image</label>
        <input onChange={this.handleChange} 
        type="text" 
        name="image" 
        className="form-control" 
        placeholder="image"
          autoFocus />
        <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>

    </form>)
}


}

export default CreateForm;