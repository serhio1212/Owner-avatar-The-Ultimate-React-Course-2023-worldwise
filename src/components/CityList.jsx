import Spinner from './Spinner.jsx';
import CityItem from './CityItem.jsx';
import Message from './Message.jsx';
import { useCities } from '../contexts/CitiesContext';

import styles from './CityList.module.css';


function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length) 
    return (
      <Message message="Add your firs cuty by clicking on a city on the map" />
    );

    
  return (
    <div>
      <ul className={styles.cityList}>
        {cities.map((city, id) => (
          <CityItem city={city} key={id} />
        ))}
      </ul>
    </div>
  );
}

export default CityList;
