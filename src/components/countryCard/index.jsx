import React from "react";
import { useHistory } from "react-router-dom";
import millify from "millify";
import { Card } from "react-bootstrap";

import "./styles.scss";

const CountryCard = ({ name, population, region, capital, flag, code }) => {
  const history = useHistory();
  const toCountryPage = () => {
    history.push(`/countries/${code.replaceAll('.', '')}`);
  };
  return (
    <Card
      onClick={toCountryPage}
      className="main_shadow"
      style={{ width: "100%", height: "100%", borderRadius: "10px" }}
    >
      <Card.Img variant="top" src={flag} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>region: {region}</Card.Text>
        <Card.Text>
          population:
          {millify(population, {
            precision: 3,
          })}
        </Card.Text>
        <Card.Text>capital: {capital}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
