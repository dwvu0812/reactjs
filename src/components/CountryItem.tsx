import styles from "./CountryItem.module.css";
import { Country } from "./CountryList";
import { flagEmojiToPNG } from "./helps";

type Props = {
  country: Country;
};

function CountryItem({ country }: Props) {
  return (
    <li className={styles.countryItem}>
      <span>{flagEmojiToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
