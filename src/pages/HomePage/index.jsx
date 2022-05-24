import React, { useEffect } from "react";

import NavBar from "../../components/navbar";
import Select from "../../components/selectBox";
import CountryCard from "../../components/countryCard";

import { Container, InputGroup, FormControl, Row, Col, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";
import { getAllCountries } from "../../redux/actions/countries";

import "./styles.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  console.log(allCountries);
  return (
    <>
      <NavBar />
      <div className="homepage">
        <Container fluid>
          <Row>
            <Col md={4}>
              <InputGroup className="mb-3 searchBox">
                <Button id="button-addon1">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
                <FormControl
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  placeholder="Search for a country..."
                />
              </InputGroup>
            </Col>
            <Col md={{ span: 2, offset: 6 }}>
              <Select />
            </Col>
          </Row>
          <Row className="mt-4 pt-2"  >
            {allCountries?.map((country) => {
              const {name,population, region, capital, flags } = country;
              return (
                <Col xs lg="3" style={{marginBottom: '5rem'}}>
                  <CountryCard name={name.common} population={population} region={region} capital={capital} flag={flags.png}/>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
