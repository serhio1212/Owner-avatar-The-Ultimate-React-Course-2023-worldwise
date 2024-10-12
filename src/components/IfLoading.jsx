import Spinner from './Spinner.jsx';
import Message from './Message.jsx';
import { CitiesProvider, useCities } from '../contexts/CitiesContext.jsx';


function IfLoad() {
  const { cities, isLoading } = useCities();
  if (isLoading)
    return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your firs cuty by clicking on a city on the map" />
    );

  }
  
export default IfLoad;