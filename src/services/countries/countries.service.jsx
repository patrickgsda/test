import axios from "axios";

export const getCountries = () => {
  const countries = axios.get(
    "https://restcountries.com/v3.1/all?fields=name,capital,population,flags"
  );
  return countries;
};
