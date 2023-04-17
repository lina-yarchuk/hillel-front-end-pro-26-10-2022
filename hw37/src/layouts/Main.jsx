import { Grid } from '@mui/material';

import Header from '../components/Header/Header';
import HomePage from "../pages/Home";

import styles from './Main.module.scss';

const MainLayout = () => {
	return (
		<div className={styles.Layout}>
			<Grid container>
				<Grid item xs={12}>
					<Header />
					</Grid>
				<HomePage />
			</Grid>
		</div>
	)
}

export default MainLayout;
