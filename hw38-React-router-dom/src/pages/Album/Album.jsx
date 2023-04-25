import React, {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";
import styles from "./Album.module.scss";

export const AlbumPage = () => {
	const [album, setAlbum] = useState(null);
	const [loading, setLoading] = useState(false);
	const { albumId } = useParams();

	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/albums/${albumId}`;
		const albumPhotoUrl = `${url}/photos`;

		const fetchAlbum = async () => {
			const response = await fetch(url);

			return await response.json();
		}

		const fetchAlbumPhoto = async () => {
			const response = await fetch(albumPhotoUrl);

			return await response.json();
		}

		const fetchData = async () => {
			setLoading(true);

			try {
				const album = await fetchAlbum();
				const photos = await fetchAlbumPhoto();
				const data = { ...album, photos };

				setAlbum(data);
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
			<h1>{album && album.title}</h1>
			<div className="content">
				{loading && 'Loading ...'}

				<p>{album && album.title}</p>

				<div className={styles.Intersection}>
					{ album && album.photos.map(photo => (
						<div className={styles.Item} key={photo.id}>
							<img src={photo.thumbnailUrl} alt="photo" />
						</div>
					)) }
				</div>
			</div>
		</div>
	)
}

export default AlbumPage;
