import React from 'react';

import {Link} from "react-router-dom";

import {Card} from "react-bootstrap";

import "./styles.scss"

const CountryCard = ({name,population,region,capital,flag}) => {
  return (
    <Link to={`/countries/${name}`}>
     <Card className='main_shadow' style={{ width: '100%', height: "100%", borderRadius: "10px" }}>
    <Card.Img variant="top" src={flag} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
      region: {region}
      </Card.Text>
      <Card.Text>
      population: {population}
      </Card.Text>
      <Card.Text>
      capital: {capital}
      </Card.Text>
    </Card.Body>
  </Card>
    </Link>
   
  )
}

export default CountryCard