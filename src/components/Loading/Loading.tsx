import React from 'react';
import styles from './Loading.module.scss';

const Loading: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.circle}></div>
            <h1>Загрузка</h1>
        </div>
    );
};

export default Loading;