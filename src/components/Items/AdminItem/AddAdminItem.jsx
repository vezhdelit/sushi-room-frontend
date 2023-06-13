import ContentLoader from "react-content-loader";
import AddIcon from "@mui/icons-material/Add";
import styles from "./AdminItem.module.scss";

const AddItem = () => {
  return (
    <div className={styles.item}>
      <AddIcon className={styles.plus} />
      <ContentLoader
        speed={2}
        width={320}
        height={370}
        viewBox="0 0 320 370"
        backgroundColor="#DDDDDD"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="0" ry="0" width="320" height="170" />
        <rect x="30" y="200" rx="10" ry="10" width="260" height="65" />
        <rect x="30" y="300" rx="10" ry="10" width="80" height="30" />
        <rect x="175" y="295" rx="10" ry="10" width="115" height="40" />
      </ContentLoader>
    </div>
  );
};

export default AddItem;
