import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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
  const fetchedCountries = useSelector((state) => state.allCountries.all);
  const [nameSearchField, setNameSearchField] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [countiesToDisplay, setCountiesToDisplay] = useState([]);
  const dispatch = useDispatch();
  const [allCountries, setAllCountries] = useState([]);


  useEffect(() => {
    setAllCountries(fetchedCountries)
  }, [fetchedCountries])
  

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  useEffect(() => {
    setCountiesToDisplay(allCountries.splice(0, 8));
  }, [allCountries]);

  const fetchMoreData = () => {
    setCountiesToDisplay(countiesToDisplay.concat(allCountries.splice(0, 8)));
  };

  // filter fetched countries
  useEffect(() => {
      setAllCountries(
        fetchedCountries.filter((country) => {
          return (
            country.name.common.toLowerCase().includes(nameSearchField.toLowerCase()) &&
            country.region.toLowerCase().includes(regionFilter.toLowerCase())
          );
        })
      );
  }, [regionFilter, nameSearchField]);

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
                  onChange={(e) => setNameSearchField(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col md={{ span: 2, offset: 6 }}>
              <Select regionFilter={regionFilter} setRegionFilter={setRegionFilter} />
            </Col>
          </Row>
          {countiesToDisplay.length > 0 ? (
            <InfiniteScroll
              dataLength={countiesToDisplay.length}
              next={fetchMoreData}
              hasMore={true}
            >
              <Row className="mt-4 pt-2 ">
                {countiesToDisplay?.map((country) => {
                  const { name, population, region, capital, flags, tld } = country;
                  return (
                    <Col xs lg="3" style={{ marginBottom: "5rem" }} className="country_card">
                      <CountryCard
                        name={name.common}
                        population={population}
                        region={region}
                        capital={capital}
                        flag={flags.png}
                        code={tld ? tld[0] :"we"}
                      />
                    </Col>
                  );
                })}
              </Row>
            </InfiniteScroll>
          ) : (
            <div className="d-flex justify-content-center mt-5 loadingMsg">
              <h3>No countries founded</h3>
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default HomePage;
