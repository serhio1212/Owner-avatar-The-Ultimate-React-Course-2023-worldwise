import CountryItem from './CountryItem.jsx';
import IfLoad from './IfLoading.jsx';
import { CitiesProvider, useCities } from '../contexts/CitiesContext.jsx';

import styles from './CountryList.module.css';

// function CountriesItem(props) {
//     return null;
// }

// CountriesItem.propTypes = {};


function CountryList() {
  IfLoad();
  const { cities, isLoading } = useCities();
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.city).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country, id) => (
        <CountryItem country={country} key={id} />
      ))}
    </ul>
  );
}

export default CountryList;
