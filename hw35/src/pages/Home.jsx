import Articles from '../components/Articles/Articles';

import styles from './Home.module.scss';
const HomePage = () => {
  return (
    <div className={styles.Homepage}>
      <Articles />
    </div>
  )
}

export default HomePage;
