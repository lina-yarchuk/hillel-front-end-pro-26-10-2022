import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
	return (
		<h1>
			404 This page doesn't exist. Go <Link to="/">Home</Link>
		</h1>
	)
};

export default NotFoundPage;
