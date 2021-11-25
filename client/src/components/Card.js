import React from 'react';
import '../css/main.css'
import 'font-awesome/css/font-awesome.min.css';

function Card(props) {
    return (
        <div>
            <section className="jumbotron text-center">
                <div className="container">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search this site" />
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
                        {   
                            props.data.map((dog, i)=>{
                                return (
                                    <div className="col-md-4" key={i}>
                                        <div className="card mb-4 box-shadow">
                                            <img
                                                className="card-img-top"
                                                // data-src={"dog_img"}
                                                style={{ height: 225, width: '100%', display: 'block' }}
                                                src={dog.image}
                                                alt={dog.breedName}
                                                data-holder-rendered="true" />
                                            <div className="card-body">
                                                <p className="card-text">{dog.breedName}</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export { Card };