import React, { useState } from 'react';
import { selectCountRandom } from '../random-counter/randomCounterSlice';
import { useSelector, useDispatch } from 'react-redux';
import {
    incrementRandom
} from './randomCounterSlice'
import styles from './Counter.module.css';


function RandomCounter() {
    const count = useSelector(selectCountRandom);
    const dispatch = useDispatch();

    return (
        <div>
            <span className={styles.value}>{count}</span>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(incrementRandom())}
                className={styles.button}
            >
                +r
            </button>
        </div>
    );
}

export default RandomCounter;