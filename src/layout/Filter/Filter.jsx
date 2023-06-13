import Categories from "../../components/Filters/Categories/Categories";
import Sort from "../../components/Filters/Sort/Sort";
import styles from "./Filter.module.scss";

const Filter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <Categories />
        <Sort />
      </div>
    </div>
  );
};

export default Filter;
