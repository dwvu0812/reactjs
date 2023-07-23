import { City } from "./CityList";
import styles from "./CityItem.module.css";
import { flagEmojiToPNG, formatDate } from "./helps";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

type Props = {
  city: City;
};

const CityItem = ({ city }: Props) => {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  const handleDelete = (e) => {
    e.preventDefault();
    deleteCity(id);
  };
  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{flagEmojiToPNG(emoji)}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          &times;
        </button>
      </Link>
    </li>
  );
};

export default CityItem;
