import React, { useState } from 'react'
import OperationSelection from './components/OperationSelection';
import ArgumentsCreation from './components/ArgumentsCreation';

const App = () => {

  //Arguments List creation and removal
  const [argumentsList, setArgumentsList] = useState([{ name: "", value: "" }]);

  //Result Holder
  const [calculatedResult, setCalculatedResult] = useState(undefined);

  return (
    <>
      {/* arguments creation */}
      <ArgumentsCreation argumentsList={argumentsList} setArgumentsList={setArgumentsList} />

      <hr />

      {/* Operations */}
      <OperationSelection argumentsList={argumentsList} setCalculatedResult={setCalculatedResult} />

      <hr />

      {/* Displaying Result */}
      <p>{`Result: ${calculatedResult}`}</p>
    </>
  )
}

export default App