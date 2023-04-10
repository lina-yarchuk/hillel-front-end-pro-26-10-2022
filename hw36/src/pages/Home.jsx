import {useState} from 'react';
import Smile from '../components/Smile/Smile';
import Results from '../components/Results/Results';

import {initialSmiles} from '../const';

import styles from './Home.module.scss';

const HomePage = () => {
	const [smiles, setSmiles] = useState(initialSmiles);
	const increaseSmileCount = smileId => {
		setSmiles(smiles.map(
				smile => smile.id === smileId
					? {...smile, count: smile.count + 1}
					: smile
			)
		);
	}

	const reset = smileId => {
		setSmiles(initialSmiles);
	}

	return (
		<div className={styles.Homepage}>
			<Results smiles={smiles} resetCounts={reset}/>

			<div className={styles.Smiles}>
				{
					smiles.map(
						smile => <Smile smile={smile} key={smile.id} increase={increaseSmileCount}/>
					)
				}
			</div>
		</div>
	)
}

export default HomePage;
