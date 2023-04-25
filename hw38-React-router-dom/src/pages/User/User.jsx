import React, {useEffect, useState} from 'react';
import { useParams, Link} from "react-router-dom";
import styles from "./User.module.scss";

export const UserPage = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const { userId } = useParams();

	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
		const userAlbumUrl = `${url}/albums`;

		const fetchUser = async () => {
			const response = await fetch(url);

			return await response.json();
		}

		const fetchUserAlbum = async () => {
			const response = await fetch(userAlbumUrl);

			return await response.json();
		}

		const fetchData = async () => {
			setLoading(true);

			try {
				const user = await fetchUser();
				const albums = await fetchUserAlbum();
				const data = { ...user, albums };

				setUser(data);
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false);
			}
		}

		fetchData();
	}, [])


	return (
		<div className={styles.User}>
			<h1>{user && user.name}</h1>
			{loading && 'Loading ...'}

			<p>{user && user.email}</p>

			<div className={styles.Albums}>
				{ user && user.albums.map(album => (
					<div key={album.id} className={styles.CardUser}>
						<Link to={`/users/${userId}/albums/${album.id}`}>
							{album.title}
						</Link>
					</div>
				)) }
			</div>
		</div>
	)
}

export default UserPage;
