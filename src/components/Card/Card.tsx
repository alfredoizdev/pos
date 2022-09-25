import { FC } from "react";
import IUserData from "../../interface/user";
import styles from "./Card.module.css";

const Card: FC<IUserData> = ({ name, phone, email, location }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2>
          {name.first} <span>{name.last}</span>
        </h2>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span>
            <b>email:</b> {email}
          </span>
          <span>
            <b>phone:</b> {phone}
          </span>
          <span>
            <b>address:</b> {location.street.name} {location.street?.number},
          </span>
          <span>
            <b>City:</b> {location.city}
          </span>
          <span>
            <b>Estate:</b> {location.state}
          </span>
          <span>
            <b>Country:</b> {location.country}
          </span>
          <span>
            <b>Zipcode:</b> {location.postcode}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
