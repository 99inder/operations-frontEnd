import React from 'react'

const ArgumentsCreation = ({argumentsList, setArgumentsList}) => {

    const handleNameChange = (e, index) => {
        let updatedArgumentsList = [...argumentsList];
        updatedArgumentsList[index].name = e.target.value;
        setArgumentsList(updatedArgumentsList);
    }

    const handleValueChange = (e, index) => {
        let updatedArgumentsList = [...argumentsList];
        updatedArgumentsList[index].value = e.target.value;
        setArgumentsList(updatedArgumentsList);
    }

    const handleRemoveArgument = (index) => {
        let updatedArgumentsList = argumentsList.filter((e, idx) => idx !== index);
        setArgumentsList(updatedArgumentsList);
    }

    const handleAddArgument = () => {
        setArgumentsList(prev => [...prev, { name: '', value: '' }]);
    };

    return (
        <div>
            {argumentsList.map((arg, index) => (
                <div key={index}>
                    <input type="text" value={arg.name} onChange={(e) => handleNameChange(e, index)} />

                    <select value={arg.value || "Select..."} onChange={(e) => handleValueChange(e, index)}>
                        <option value={undefined} disabled>Select...</option>
                        <option value={true}>true</option>
                        <option value={false}>false</option>
                    </select>

                    {index > 0 && (
                        <button onClick={() => handleRemoveArgument(index)}>X</button>
                    )}
                </div>
            ))}

            <button onClick={handleAddArgument}>+ Add Arg</button>
        </div>
    )
}

export default ArgumentsCreation