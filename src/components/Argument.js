import React from 'react'

const Argument = ({ selectedOperation, setSelectedOperation, resultCalculator, argumentsList }) => {
    return (
        selectedOperation.length !== 0 && selectedOperation === "argument" && (
            <div>
                <select name="" onChange={resultCalculator}>
                    <option value="" disabled>Select...</option>
                    {
                        argumentsList.map((item, index) => {
                            return <option value={item.value} key={index}>{item.name}</option>
                        })
                    }
                </select>
                <button onClick={() => setSelectedOperation("")}>X</button>
            </div>
        )
    )
}

export default Argument