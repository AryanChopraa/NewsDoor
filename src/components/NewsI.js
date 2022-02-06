import { getByTitle } from '@testing-library/react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class NewsI extends Component {
  static propTypes = {};

  render() {
    let {title,description,imageurl,newsurl} = this.props;
    return (<div className='my-3'>
            <div className="card" style={{width:"18rem"}}>
                <img className="card-img-top" src={!imageurl?"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg":imageurl} alt="Card image cap"/>
                <div className="card-body box123">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsurl} target="_blank"     className="btn hello">Read more</a>
                </div>
            </div>
        </div>);
  }
}



