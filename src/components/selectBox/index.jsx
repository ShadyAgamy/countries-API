import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";


const DropDownContainer = styled("div")`
     width: 12.5em;
    margin-left: auto;
`;

const DropDownHeader = styled("div")`
    margin-bottom: 0.3em;
    padding: 1.1rem 1.3rem;
    border-radius: 6px;
  font-weight: 600;
  font-size: .8rem;
  color: var(--textColor);
  background:var(--BackgroundElmns);
  cursor: pointer;
  display:flex;
  text-transform: capitalize;
 
`;

const DropDownListContainer = styled("div")`
  position: relative;
  z-index: 9;
`;

const DropDownList = styled("ul")`
  margin: 0;
  background:var(--BackgroundElmns);
  color: var(--textColor);
  font-size: .8rem;
  font-weight: 600;
  cursor: pointer;
  padding: 1rem 1.3rem .2rem;
  border-radius: 6px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;

`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  text-transform: capitalize;
 
`;

const options = ["africa", "america", "asia", "europe", "oceania"];
export default function Select() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const inputEl = useRef(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  useEffect(() => {
    const handelWindowClick = (e) => {
      if (!inputEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handelWindowClick);
    return () => {
      window.removeEventListener("click", handelWindowClick);
    };
  }, []);

  return (
   
      <DropDownContainer ref={inputEl}>
        <DropDownHeader className="main_shadow" onClick={toggling}>{selectedOption || "Filter by Region"}  <FontAwesomeIcon icon={faAngleDown} className="ml-auto" /></DropDownHeader>
        {isOpen && (
          <DropDownListContainer className="main_shadow">
            <DropDownList >
              {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
  
  );
}
