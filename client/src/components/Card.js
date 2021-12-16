import React, { Component } from 'react';
import '../css/main.css'
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, 
    Link} from 'react-router-dom';


function Card(props) {

    return (             
                                        <div className="card box-shadow col-md-4" key={props.key}>
                                            <img
                                                className="card-img-top"
                                                // data-src={"dog_img"}
                                                style={{ height: 225, width: '100%', display: 'block' }}
                                                src={props.dog.image}
                                                alt={props.dog.breedName}
                                                data-holder-rendered="true" />
                                            <div className="card-body">
                                                <p className="card-text">{props.dog.breedName}</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        {/* <button type="button" className="btn btn-sm btn-outline-secondary">View</button> */}
                                                        <button type="button" className="btn btn-sm btn-outline-secondary"><Link to={'/edit/'+props.dog._id} dogId={props.dog._id}>Edit</Link></button>
                                                        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => props.dogDelete(props.dog._id)}>Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                   
                        
          
    )

}
    

export { Card };