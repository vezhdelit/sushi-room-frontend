import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategory,
  setShowOnlyFavourites,
} from "../../../redux/slices/filterSlice";
import { selectIsAuth } from "../../../redux/slices/authSlice";

import styles from "./Categories.module.scss";
import { ReactComponent as HeartIcon } from "../../../assets/svg/heart.svg";

const Categories = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.filter.category);

  const showOnlyFavourites = useSelector(
    (state) => state.filter.showOnlyFavourites
  );
  const isAuth = useSelector(selectIsAuth);

  const categories = [
    "Всі",
    "Роли",
    "Суші",
    "Напої",
    "Десерти",
    "Соуси",
    "Інше",
  ];

  return (
    <div className={styles.categories}>
      <ul>
        {isAuth && (
          <button
            className={`${styles.heartButton} ${
              showOnlyFavourites ? styles.active : ""
            }`}
            onClick={() => dispatch(setShowOnlyFavourites(!showOnlyFavourites))}
          >
            <HeartIcon />
          </button>
        )}

        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => dispatch(setCategory(categoryName))}
            className={category === categoryName ? styles.active : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
