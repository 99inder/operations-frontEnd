import React, { useState } from 'react'
import Constant from './Constant';
import Argument from './Argument';
import AndOr from './AndOr';

const OperationSelection = ({ argumentsList, setCalculatedResult }) => {

    //Operation Selection
    const [selectedOperation, setSelectedOperation] = useState("");

    const resultCalculator = (e) => {
        if (selectedOperation === "constant" || selectedOperation === "argument")
            setCalculatedResult(e.target.value);
    }

    return (
        <div>
            {
                (selectedOperation.length === 0 || selectedOperation === 'and' || selectedOperation === 'or') && (
                    <select value={selectedOperation} onChange={(e) => setSelectedOperation(e.target.value)}>
                        <option value="" disabled>Select an operation</option>
                        <option value="constant">Constant</option>
                        <option value="argument">Argument</option>
                        <option value="and">AND</option>
                        <option value="or">OR</option>
                    </select>
                )
            }
            {
                (selectedOperation === 'and' || selectedOperation === 'or') && (
                    <button onClick={() => setSelectedOperation("")}>X</button>
                )
            }

            {/* Operation is Selected */}

            {/* Selected Operation: CONSTANT */}
            < Constant selectedOperation={selectedOperation} setSelectedOperation={setSelectedOperation} resultCalculator={resultCalculator} />

            {/* Selected Operation: ARGUMENT */}
            <Argument selectedOperation={selectedOperation} setSelectedOperation={setSelectedOperation} resultCalculator={resultCalculator} argumentsList={argumentsList} />

            {/* Selected Operation: AND */}
            <AndOr selectedOperation={selectedOperation} setSelectedOperation={setSelectedOperation} argumentsList={argumentsList} setCalculatedResult={setCalculatedResult} />

        </div>
    )
};

export default OperationSelection