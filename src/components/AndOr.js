import React, { useEffect, useState } from 'react'
import AndOrSub from './AndOrSub'
import OperationSelection from './OperationSelection';

const AndOr = ({ selectedOperation, argumentsList, setSelectedOperation, setCalculatedResult }) => {

    //ADD OPERATION
    const [operationCount, setOperationCount] = useState(0);

    const [choices, setChoices] = useState([undefined, undefined]);

    function resultHandler() {
        if (choices[0] !== undefined && choices[1] !== undefined) {
            if (selectedOperation === "and")
                setCalculatedResult(choices[0] && choices[1]);
            else if (selectedOperation === "or")
                setCalculatedResult(choices[0] || choices[1]);
        }
    }

    useEffect(() => {
        resultHandler();
        // eslint-disable-next-line
    }, [choices])

    return (
        <div style={{ marginLeft: "20px" }}>
            {
                selectedOperation.length !== 0 && (selectedOperation === "and" || selectedOperation === "or") && (
                    choices.map((items, index) => {
                        return <AndOrSub key={index} argumentsList={argumentsList} setSelectedOperation={setSelectedOperation} position={index} choices={choices} setChoices={setChoices} />
                    })
                )
            }
            {
                !(operationCount <= 0) &&
                < OperationSelection argumentsList={argumentsList} setCalculatedResult={setCalculatedResult} />
            }
            {
                (selectedOperation === "and" || selectedOperation === 'or') && (
                    <button onClick={() => setOperationCount(prev => prev + 1)}>+ add op</button>
                )
            }

        </div>
    )
}

export default AndOr