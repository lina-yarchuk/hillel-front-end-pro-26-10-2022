import { UserCard } from '../../components/UserCard/UserCard';
import { useState, useEffect } from 'react';

import styles from './Home.module.scss';

export const HomePage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()

                setUsers(data);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        }

         fetchData();
    }, [])

    return (
        <div className={styles.Homepage}>
            <h1>List of users</h1>

            {loading && 'Loading ...'}

            <div className={styles.Intersection}>
                { users.map(user => (<UserCard user={user} key={user.id}></UserCard>)) }
            </div>
        </div>
    )
}

export default HomePage;
