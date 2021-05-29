import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => (
    <h2 className={styles.notisTitle}>{message}</h2>
);

Notification.propTypes = {
    message: PropTypes.string,
};

export default Notification;