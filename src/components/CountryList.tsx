import { useCities } from "../contexts/CitiesContext";
import CityItem from "./CityItem";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

type Props = {
  cities?: City[];
  isLoading?: boolean;
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

export interface Country {
  country: string;
  emoji: string;
}

const CountryList: React.FC<Props> = () => {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first country by clicking on your map" />;
  const countries = cities.reduce((arr: Country[], city: City) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.emoji} />
      ))}
    </ul>
  );
};

export default CountryList;
