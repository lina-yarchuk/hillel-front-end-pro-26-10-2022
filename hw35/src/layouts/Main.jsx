import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

import HomePage from '../pages/Home';

import styles from './Main.module.scss';

const MainLayout = () => {
    return (
        <div className="Layout" style={{padding: '20px 40px'}}>
            <Header/>

            <div className={styles.content}>
                <Sidebar/>

                <HomePage/>
            </div>
        </div>
    )
}

export default MainLayout;
