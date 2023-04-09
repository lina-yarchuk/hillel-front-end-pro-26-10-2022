import styles from './Smile.module.scss'

function Smile({smile, increase}) {
	return (
		<div className={styles.Smile}>
			<h3>{smile.emoji}</h3>
			<h4>{smile.count}</h4>
			<button className="plus" onClick={() => increase(smile.id)}>Vote</button>
		</div>
	);
}

export default Smile;
