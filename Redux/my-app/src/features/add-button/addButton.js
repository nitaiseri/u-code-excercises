import React from 'react';
import { useDispatch } from 'react-redux';
import {
    increment,
  } from '../counter/counterSlice';
import {
    incrementRandomNotRandom
} from '../random-counter/randomCounterSlice'
  import styles from './Counter.module.css';

function AddButton() {
    const dispatch = useDispatch();

    return (
        <div>
            <button
                aria-label="Increment value"
                onClick={() => {dispatch(increment()); dispatch(incrementRandomNotRandom(1));}}
                className={styles.button}
                >
                +both
            </button>
        </div>
    );
}

export default AddButton;