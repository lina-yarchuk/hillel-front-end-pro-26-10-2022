import {useState} from 'react';
import styles from './Results.module.scss';

function Results({smiles, resetCounts}) {
	const [result, setResult] = useState(null);
	const showResult = () => {
		const target = smiles.reduce((acc, slime) => slime.count >= acc.count ? slime : acc, {count: 0});

		setResult(target);
	}

	const reset = () => {
		resetCounts();
		setResult(null);
	}

	return (
		<div className={styles.Results}>
			<button onClick={showResult} className="plus">
				Show results
			</button>

			{result &&
				<div className={styles.Result}>
					<div className={styles.Title}>
						Winner: <span>{result.emoji}</span> with score <span>{result.count}</span>
						<button className={styles.ResetBtn} onClick={reset}>Reset</button>
					</div>
				</div>
			}
		</div>
	);
}

export default Results;
