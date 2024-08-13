import styles from './ProgressBar.module.css';

const ProgressBar = ({ value }) => {
    return (
        <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: `${value}%` }}></div>
        </div>
    );
};

export default ProgressBar;
