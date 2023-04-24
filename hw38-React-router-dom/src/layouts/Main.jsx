import React from 'react';
import {Routes, Route} from "react-router-dom";

import Header from '../components/Header/Header';
import {HomePage, UserPage, AlbumPage, NotFoundPage } from '../pages';
import styles from './Main.module.scss';

export const MainLayout = () => {
    return (
        <div className="Layout" style={{padding: '20px 20px'}}>
            <Header />

            <div className={styles.content}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/users/:userId" element={<UserPage />} />
                    <Route path="/users/:userId/albums/:albumId" element={<AlbumPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </div>
    )
}

export default MainLayout;
