import React from 'react'

const Constant = ({ selectedOperation, setSelectedOperation, resultCalculator }) => {

    return (
        selectedOperation.length !== 0 && selectedOperation === "constant" && (
            <div>
                <select onChange={(e) => resultCalculator(e)}>
                    <option value={undefined} selected disabled>Select...</option>
                    <option value={true}>true</option>
                    <option value={false}>false</option>
                </select>
                <button onClick={() => setSelectedOperation("")}>X</button>
            </div>
        )
    )
}

export default Constant