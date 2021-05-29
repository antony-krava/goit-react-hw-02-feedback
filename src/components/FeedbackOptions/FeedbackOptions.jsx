import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className={styles.boxButton}>
        {options.map((name, index) =>
            <button
                key={index}
                className={styles.button}
                type="button"
                onClick={() => onLeaveFeedback({ name })}>
                {name}
            </button>
        )}
    </div>
);

FeedbackOptions.propTypes = {
    oprions: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;