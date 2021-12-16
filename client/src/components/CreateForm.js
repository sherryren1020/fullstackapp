import React from 'react';
import dataService from '../services/dataService';
import Joi from 'joi-browser'
import { Redirect } from 'react-router-dom';
class CreateForm extends React.Component {
    state = {
        dogBreeds: {
            breedName: '',
            lifeExpectancy: '',
            Temperament: [],
            image: '',
        },
        errors: [],
        redirectToMain: false
    }

    handleChange = (e) => {
        var dogBreeds = {...this.state.dogBreeds}
        if (e.target.name == 'Temperament'){
            let temperament = e.target.value.split(',')
            console.log(temperament)
            dogBreeds[e.target.name] = temperament
        }else{
            dogBreeds[e.target.name]=e.target.value
        }
        this.setState({
            dogBreeds: dogBreeds
        })
    }

    validationSchema = {
        breedName: Joi.string().required().label('Name'),
        lifeExpectancy: Joi.number().required().label('lifeExpectancy'),
        Temperament: Joi.array().items(Joi.string()).empty().label('Temperament'),
        image: Joi.string().empty().label('image')
    }
    handleSubmit = (e) => {
        const result = Joi.validate(this.state.dogBreeds, this.validationSchema, { abortEarly: false })
        const errors = []
        this.setState({errors})
        if (result.error) {
            result.error.details.forEach(detail => {
                const validationError = {}
                validationError.message = detail.message
                validationError.field = detail.path[0]
                errors.push(validationError)
                e.preventDefault();
            })
        }else{
            dataService.addData((err, result) => {
                if (err) return console.log(err)
                console.log(result.success.breedName + "added!")
            }, this.state.dogBreeds)
            this.setState({redirectToMain: true})
            e.preventDefault();
            this.props.history.push('/')
        }
    }
    render() {
        return (
            <form className="form-signin" onSubmit={this.handleSubmit} afterSubmit={()=> this.state.redirectToMain ? <Redirect to="/main"></Redirect>:null}>
                <h1 className="h3 mb-3 font-weight-normal text-center">Add new breed</h1>
                <label className="sr-only">breedName</label>
                <input onChange={this.handleChange}
                    type="text"
                    name="breedName"
                    className="form-control"
                    placeholder="breedName"
                    autoFocus />
                <label htmlFor="inputPassword" className="sr-only">lifeExpectancy</label>
                <input onChange={this.handleChange}
                    type="text"
                    name="lifeExpectancy"
                    className="form-control"
                    placeholder="lifeExpectancy" />
                <label className="sr-only">Temperament</label>
                <input onChange={this.handleChange}
                    type="text"
                    name="Temperament"
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
                {this.state.errors.length > 0 &&
                    <div className='alert alert-danger mt-2'>
                        <ul>
                            {this.state.errors.map((error, i) => {
                                return <li key={i}>{error.message}</li>
                            })}
                        </ul>

                    </div>}
            </form>
            )
    }


}

export default CreateForm;