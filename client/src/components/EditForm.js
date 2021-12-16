import React from 'react';
import dataService from '../services/dataService';
import { Redirect} from 'react-router-dom';

class EditForm extends React.Component {
   
    constructor(props){
       super(props)
       this.state={
            breedName: '', 
            lifeExpectancy:'',
            Temperament:[],
            image:''
        } 
    }

    componentDidMount(){
        dataService.getOneData((err,dog)=>{
            if(err) return console.log(err)
            // console.log(this.props.data)
            this.setState({
                breedName:dog.breedName,
                lifeExpectancy:dog.lifeExpectancy,
                Temperament:dog.Temperament,
                image:dog.image
            })
          },this.props.match.params.id)
    }

    


handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}

handleSubmit=(e)=>{
    e.preventDefault();
    dataService.editData((err)=>{
        if(err) return console.log(err)

        this.props.history.push('/')
    },this.state,this.props.match.params.id)
    

    // return <Redirect to={{
    //     pathname:"/main"
    // }} />

}
render (){
    return(
        <form className="form-signin" onSubmit={this.handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal text-center">Edit breed</h1>
        <label  className="sr-only">breedName</label>
        <input onChange={this.handleChange} 
        type="text" 
        name="breedName"  
        className="form-control" 
        placeholder="breedName"
          autoFocus 
          value={this.state.breedName}/>
        <label htmlFor="inputPassword" className="sr-only">lifeExpectancy</label>
        <input  onChange={this.handleChange} 
        type="text" 
        name="lifeExpectancy" 
        className="form-control" 
        placeholder="lifeExpectancy" 
        value={this.state.lifeExpectancy}/>
        <label  className="sr-only">Temperament</label>
        <input onChange={this.handleChange} 
        type="text" 
        name="temperament" 
        className="form-control" 
        placeholder="Temperament"
          autoFocus 
          value={this.state.Temperament}/>
          <label htmlFor="inputEmail" className="sr-only">image</label>
        <input onChange={this.handleChange} 
        type="text" 
        name="image" 
        className="form-control" 
        placeholder="image"
          autoFocus 
          value={this.state.image}/>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Save to Change</button>

    </form>)
}


}

export default EditForm;