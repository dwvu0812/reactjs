import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

type Props = {
  cities: City[];
  isLoading: boolean;
};

export interface City {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: Position;
  id: number;
}

export interface Position {
  lat: number;
  lng: number;
}

const CityList: React.FC<Props> = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city by clicking on your map" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city: City) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CityList;
