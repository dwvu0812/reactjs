import { City } from "./CityList";
import styles from "./CityItem.module.css";
import { flagEmojiToPNG, formatDate } from "./helps";
import { Link } from "react-router-dom";

type Props = {
  city: City;
};

const CityItem = ({ city }: Props) => {
  const { cityName, emoji, date, id, position } = city;
  return (
    <li>
      <Link
        className={styles.cityItem}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{flagEmojiToPNG(emoji)}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
};

export default CityItem;
