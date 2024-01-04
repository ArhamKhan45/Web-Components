"use client";
import "../scss/matrimonyProfileFor.scss";
import { useState, useId } from "react";

import Select from "react-select";
export default function MatrimonyDropdown({ getdata }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];

  const colourStyles = {
    menuList: (styles) => ({
      ...styles,
      background: "red",
      color: "white",
    }),
    option: (provided, state) => {
      return {
        ...provided,
        ...state,

        backgroundColor: state.isFocused
          ? "white"
          : state.isSelected
          ? "yellow"
          : "",

        color: state.isSelected ? "black" : state.isFocused ? "black" : "",

        "&:active": {
          color: "white",
          backgroundColor: "black",
        },
      };
    },
    control: (base, state) => ({
      ...base,
      background: "#f8f9fa",
      border: state.isFocused ? "none" : "none",
      // borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
      // borderColor: state.isFocused ? "yellow" : "green",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        // borderColor: state.isFocused ? "red" : "blue",
      },
    }),
  };
  if (selectedOption) {
    getdata(selectedOption.value);
  } else "";
  return (
    <section className="Matrimony-Profile-For">
      <label htmlFor="dropdown-option-id">Matrimony Profile For*</label>
      <div className="select-gender">
        <Select
          styles={colourStyles}
          className="select-gender"
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          placeholder="Profile For"
          name="selector"
          required
          instanceId={useId()}
        />
      </div>
    </section>
  );
}

// color: "green",
// "&:hover": {
//   color: " red",
//   backgroundColor: "yellow",
// },
// "&:focus": {
//   color: "white",
//   backgroundColor: "yellow",
// },
