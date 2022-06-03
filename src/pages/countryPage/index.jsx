import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import NavBar from "../../components/navbar";

import { Container, Button, Row, Col, Badge } from "react-bootstrap";

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

  const { name, flags, population, region, subregion, capital, borders, currencies, languages, tld } =
    country;
    const code = tld? tld[0] : null;

 console.log(borders)

  return (
    <>
      <NavBar />
      <Container fluid className="countryPage">
        <Button variant="light" onClick={goHome}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </Button>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={flags?.png} alt="country flag" />
          </Col>
          <Col md={6} className="countryPage_info">
            <h3 className="h3 fw-bold ">{name?.common}</h3>
            <Row className="  align-items-center">
              <Col className="me-5">
                <h5>
                  Native name:
                  <span>{name?.nativeName[Object.keys(name.nativeName)[0]].official}</span>
                </h5>
              </Col>
              <Col>
                <h5>
                  top level domain: <span>{code}</span>
                </h5>
              </Col>
            </Row>
            <Row className="  align-items-center">
              <Col className="me-5">
                <h5>
                  population:
                  <span>
                    {population
                      ? millify(population, {
                          precision: 3,
                        })
                      : 0}
                  </span>
                </h5>
              </Col>
              <Col>
                <h5>
                  currencies:
                  <span>{currencies ? currencies[Object.keys(currencies)[0]].name : null}</span>
                </h5>
              </Col>
            </Row>
            <Row className="  align-items-center">
              <Col className="me-5">
                <h5>
                  region:
                  <span>{region}</span>
                </h5>
              </Col>
              <Col>
                <h5>
                  languages:
                  {languages
                    ? Object.keys(languages).map((key, i) => (
                        <span>
                          {!(i === Object.keys(languages).length - 1)
                            ? languages[key] + ","
                            : languages[key]}
                        </span>
                      ))
                    : null}
                </h5>
              </Col>
            </Row>
            <Row className="  align-items-center">
              <Col className="me-5">
                <h5>
                subregion:
                  <span>{subregion}</span>
                </h5>
              </Col>
            </Row>
            <Row className="  align-items-center">
              <Col >
                <h5>
                capital:
                  <span>{capital?capital[0]: null}</span>
                </h5>
              </Col>
            </Row>
            <Row className=" borders">
              <Col >
                <h5 className="d-flex align-items-center">
                borders countries:
                 {borders?.map(border => <Badge bg="light" className="main_shadow" onClick={() => history.push(`/countries/${border}`)}>{border}</Badge>)}
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CountryPage;
