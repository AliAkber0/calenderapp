import { ReactCountryDropdown } from "react-country-dropdown";
import "react-country-dropdown/dist/index.css";
import fetchData from "../api/api";
import { useDispatch } from "react-redux";

const Countries = (props) => {
  const dispatch = useDispatch();
  const getHolidays = async (country, year) => {
    let data = await fetchData(country, year);
    dispatch({ type: "AddHolidays", payload: data });
  };

  const handleSelect = (country) => {
    console.log(country);
    getHolidays(country.code, 2021);
    /* returns the details on selected country as an object
            {
              name: "United States of America", 
              code: "US", 
              capital: "Washington, D.C.", 
              region: "Americas", 
              latlng: [38, -97]
            }
        */
  };
  return (
    <div>
      <ReactCountryDropdown onSelect={handleSelect} countryCode="PK" />
    </div>
  );
};

export default Countries;
