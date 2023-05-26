import React from 'react'

const AndOrSub = ({ argumentsList, setSelectedOperation, position, choices, setChoices }) => {

    const updateChoices = (e) => {
        let newChoices = [...choices];
        e.target.value === "true" ? newChoices[position] = true : newChoices[position] = false;
        setChoices(newChoices);
    }
    return (
        <div>
            <select defaultValue={"Select..."} name="" onChange={updateChoices}>
                <option disabled>Select...</option>
                {
                    argumentsList.map((item, index) => {
                        return <option value={item.value} key={index}>{item.name}</option>
                    })
                }
            </select>
            <button onClick={() => setSelectedOperation("")}>X</button>
        </div>
    )
}

export default AndOrSub