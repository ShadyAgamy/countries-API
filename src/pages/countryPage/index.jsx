import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import NavBar from "../../components/navbar";

import { Container, Button, Row, Col } from "react-bootstrap";

import millify from "millify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { getCountry } from "../../redux/actions/countries";

import "./styles.scss";

function CountryPage() {
  const history = useHistory();
  const { nameParam } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.allCountries.country);
  const goHome = () => {
    history.push("/");
  };

  useEffect(() => {
    dispatch(getCountry(nameParam));
  }, [nameParam]);

  const { name, flags, population, region, subregion, capital, flag, currencies, languages } =
    country;

//   console.log(
//     millify(0, {
//       precision: 3,
//     })
//   );

  return (
    <>
      <NavBar />
      <Container fluid className="country_page">
        <Button variant="light" onClick={goHome}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </Button>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={flags?.png} alt="country flag" />
          </Col>
          <Col md={6}>
            <h3 className="h3 fw-bold">{name?.common}</h3>
            <div className="d-flex justify-content-between align-items-center">
              <h5>
                Native name:
                <span>{name?.nativeName[Object.keys(name.nativeName)[0]].official}</span>
              </h5>
              <h5>
                top level domain: <span>{flag}</span>
              </h5>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5>
                population:
                <span>
                  {population  ? millify(population, {
                    precision: 3,
                  }): 0}
                </span>
              </h5>
              <h5>
                currencies:
                <span>{currencies ? currencies[Object.keys(currencies)[0]].name : null}</span>
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CountryPage;
