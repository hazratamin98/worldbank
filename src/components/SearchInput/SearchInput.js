import { SearchRounded } from "@material-ui/icons";
import styles from "./SearchInput.module.css";
const SearchInput = ({ ...res }) => {
  return (
    <div className={styles.wrapper}>
      <SearchRounded color="inherit" />
      <input
        placeholder="Filter by Name, Region or SubRegion"
        className={styles.input}
        {...res}
      />
    </div>
  );
};

export default SearchInput;
