import React, { useEffect } from "react";

import NavBar from "../../components/navbar";

import { Container, InputGroup, FormControl, Row, Col } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { getAllCountries } from "../../redux/actions/countries";

import "./styles.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const { allCountries } = useSelector((state) => state.message);
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <div className="homepage">
        <Container fluid>
          <Row>
            <Col md={4}> <InputGroup className="mb-3">
            <InputGroup.Text id="searchForCountry">@</InputGroup.Text>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="searchForCountry"
            />
          </InputGroup></Col>
            <Col md={{ span: 2, offset: 6 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
          </Row>
         
        </Container>
      </div>
    </>
  );
};

export default HomePage;
