import styles from "./CountriesTable.module.css";
import React, { useState } from "react";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";

const orderBy = (countries, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }

  if (direction === "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

  return countries;
};

const CountriesTable = ({ countries }) => {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();

  const orderedCountries = orderBy(countries, value, direction);
  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  };

  return (
    <div>
      <div className={styles.heading}>
        <button
          className={styles.heading_name}
          onClick={() => setValueAndDirection("name")}
        >
          <div>Name</div>

          {value === "name" && <SortArrow direction={direction} />}
        </button>
        <button
          className={styles.heading_population}
          onClick={() => setValueAndDirection("population")}
        >
          <div>Population</div>

          {value === "population" && <SortArrow direction={direction} />}
        </button>
      </div>
      {orderedCountries.map((item) => (
        <div className={styles.amin}>
          <div className={styles.name}>{item.capital}</div>

          <div className={styles.population}>{item.population}</div>
          {/* <div className={styles.population}>{item.}</div> */}
        </div>
      ))}
    </div>
  );
};
export default CountriesTable;
