'use client';

import { useState } from 'react';
import ProgressBar from '../../components/ProgressBar';

export default function Home() {
    const [value, setValue] = useState(0);
    const [history, setHistory] = useState([]);
    const [redoStack, setRedoStack] = useState([]);

    const handleIncrement = () => {
        if (value < 150) {
            setHistory([...history, value]);
            setRedoStack([]);
            setValue(value + 1);
        }
    };

    const handleDecrement = () => {
        if (value > 0) {
            setHistory([...history, value]);
            setRedoStack([]);
            setValue(value - 1);
        }
    };

    const handleUndo = () => {
        if (history.length > 0) {
            const lastValue = history.pop();
            setRedoStack([...redoStack, value]);
            setValue(lastValue);
            setHistory([...history]);
        }
    };

    const handleRedo = () => {
        if (redoStack.length > 0) {
            const lastRedoValue = redoStack.pop();
            setHistory([...history, value]);
            setValue(lastRedoValue);
            setRedoStack([...redoStack]);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Progress Bar App</h1>
            <ProgressBar value={(value / 150) * 100} />
            <div style={{ marginTop: '20px' }}>
                <button onClick={handleDecrement}>-1</button>
                <button onClick={handleIncrement}>+1</button>
                <button onClick={handleUndo}>Undo</button>
                <button onClick={handleRedo}>Redo</button>
            </div>
            <p>Current Value: {value}</p>
        </div>
    );
}
