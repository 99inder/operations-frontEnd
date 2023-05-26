import React, { useState, useEffect } from 'react';

function App() {
    const [argumentsList, setArgumentsList] = useState([{ name: '', value: '' }]);
    const [selectedOperation, setSelectedOperation] = useState('');
    const [result, setResult] = useState('');
    const [resultValue, setResultValue] = useState('true');
    const [showOperationType, setShowOperationType] = useState(true);
    const [constantResult, setConstantResult] = useState('true');
    const [argumentResult, setArgumentResult] = useState('');

    const handleCalculateResult = () => {
        let calculatedResult;

        if (selectedOperation === 'constant') {
            calculatedResult = constantResult;
        } else if (selectedOperation === 'argument') {
            const selectedArgument = argumentsList.find((arg) => arg.name === argumentResult);
            if (selectedArgument) {
                calculatedResult = selectedArgument.value;
            }
        } else if (selectedOperation === 'and') {
            calculatedResult = argumentsList.every((arg) => arg.value === 'true');
        } else if (selectedOperation === 'or') {
            calculatedResult = argumentsList.some((arg) => arg.value === 'true');
        }

        setResult(calculatedResult);
    };

    const handleNameChange = (e, index) => {
        const updatedArguments = [...argumentsList];
        updatedArguments[index].name = e.target.value;
        setArgumentsList(updatedArguments);
    };

    const handleValueChange = (e, index) => {
        const updatedArguments = [...argumentsList];
        updatedArguments[index].value = e.target.value;
        setArgumentsList(updatedArguments);

        if (selectedOperation === 'constant' && index === 0) {
            setResultValue(e.target.value);
        }
    };


    const handleOperationChange = (e) => {
        const operation = e.target.value;
        setSelectedOperation(operation);
        handleCalculateResult();
    };




    useEffect(() => {
        // Perform the necessary calculations based on the selected operation and arguments
        let calculatedResult = '';

        if (selectedOperation === 'constant') {
            calculatedResult = constantResult;
        } else if (selectedOperation === 'argument') {
            calculatedResult = argumentResult;
        } else if (selectedOperation === 'and') {
            calculatedResult = 'AND Result';
        } else if (selectedOperation === 'or') {
            calculatedResult = 'OR Result';
        }

        setResult(calculatedResult);
    }, [argumentsList, selectedOperation, constantResult, argumentResult]);

    const handleAddArgument = () => {
        const updatedArguments = [...argumentsList, { name: '', value: '' }];
        setArgumentsList(updatedArguments);
    };

    const handleRemoveArgument = (index) => {
        const updatedArguments = [...argumentsList];
        updatedArguments.splice(index, 1);
        setArgumentsList(updatedArguments);
    };

    const handleResetOperation = () => {
        setSelectedOperation('');
        setShowOperationType(true);
        setArgumentResult('');
    };



    return (
        <div>
            {argumentsList.map((arg, index) => (
                <div key={index}>
                    <label>
                        Argument Name:
                        <input
                            type="text"
                            value={arg.name}
                            onChange={(e) => handleNameChange(e, index)}
                        />
                    </label>

                    <label>
                        Argument Value:
                        <select value={arg.value} onChange={(e) => handleValueChange(e, index)}>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </label>

                    {index > 0 && (
                        <button onClick={() => handleRemoveArgument(index)}>X</button>
                    )}
                </div>
            ))}

            <button onClick={handleAddArgument}>+ Add Arg</button>

            {!selectedOperation && (
                <div>
                    <label>
                        Operation Type:
                        <select value={selectedOperation} onChange={handleOperationChange}>
                            <option value="">Select an operation</option>
                            <option value="constant">Constant</option>
                            <option value="argument">Argument</option>
                            <option value="and">AND</option>
                            <option value="or">OR</option>
                        </select>
                    </label>
                </div>
            )}

            {selectedOperation && selectedOperation !== 'argument' && (
                <div>
                    <label>
                        Choose Result:
                        <select value={constantResult} onChange={(e) => setConstantResult(e.target.value)}>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </label>
                    <button onClick={handleResetOperation}>X</button>
                </div>
            )}

            {selectedOperation && selectedOperation === 'argument' && (
                <div>
                    <label>
                        Choose Argument:
                        <select value={argumentResult} onChange={(e) => { setArgumentResult(e.target.value) }}>
                            {argumentsList.map((arg, index) => (
                                <option key={index} value={arg.value}>
                                    {arg.name}
                                </option>
                            ))}
                        </select>
                    </label>
                    <button onClick={handleResetOperation}>X</button>
                </div>
            )}

            <div>Result: {result}</div>
        </div>
    );

}

export default App;
