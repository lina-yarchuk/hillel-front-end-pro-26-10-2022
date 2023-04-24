import styles from "./UserCard.module.scss";
import {Link} from "react-router-dom";

export const UserCard = ({ user }) => {
    return (
        <div key={user.id} className={styles.Card}>
            <h4>{user.name}</h4>
            <p>{user.email}</p>

            <Link to={`/users/${user.id}`}>
                Albums
            </Link>
        </div>
    )
}

export default UserCard;
