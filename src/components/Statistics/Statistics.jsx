import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
    return (
        <ul className={styles.statisticsList}>
            <li className={styles.statisticsItem}>Good: {good}</li>
            <li className={styles.statisticsItem}>Neutral: {neutral}</li>
            <li className={styles.statisticsItem}>Bad: {bad}</li>
            <li className={styles.statisticsItem}>Total: {total}</li>
            <li className={styles.statisticsItem}>Positive feedback: {percentage}%</li>
        </ul>
    );
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    percentage: PropTypes.number,
};

export default Statistics;