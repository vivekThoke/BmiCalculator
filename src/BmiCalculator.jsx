import React, { useState } from "react";
import "./BmiCalcultor.css"

function BmiCalculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');

    const calculateBmi = () => {
        if (weight && height) {
            const weightInkg = parseFloat(weight);
            const heightInMeters = parseFloat(height) / 100;
            const bmiResult = weightInkg / (heightInMeters * heightInMeters);
            setBmi(bmiResult.toFixed(2));
        }
    };

    return (
        <div className="BMICalcultor">
            <h1>BMI Calcultor</h1>
            <div >
                <label>Weight (kg):</label>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <div >
                <label>Height (cm):</label>
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <button onClick={calculateBmi} className="bmiButton">Calculte Bmi</button>
            {bmi && <p>Your BMI is: {bmi}</p>}
        </div>
    );
}

export default BmiCalculator;